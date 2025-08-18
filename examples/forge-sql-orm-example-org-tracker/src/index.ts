import Resolver, { Request } from "@forge/resolver";
import ForgeSQL, {
  applySchemaMigrations,
  dropSchemaMigrations,
  fetchSchemaWebTrigger,
} from "forge-sql-orm";
import migration from "./migration";
import { and, eq, ilike, InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { appUser, organization } from "./entities";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL({ logRawSqlQuery: true });

resolver.define(
  "getUsers",
  async (
    req: Request<{
      searchTerm?: string;
      organizationId?: number;
    }>,
  ): Promise<
    {
      users: InferSelectModel<typeof appUser>;
      organization: InferSelectModel<typeof organization>;
    }[]
  > => {
    const { searchTerm, organizationId } = req.payload;

    let joinQuery = forgeSQL
      .select({ users: appUser, organization: organization })
      .from(appUser)
      .innerJoin(organization, eq(appUser.organizationId, organization.id));
    if (searchTerm && organizationId) {
      joinQuery.where(
        and(ilike(appUser.name, searchTerm), eq(appUser.organizationId, organizationId)),
      );
    } else if (searchTerm) {
      joinQuery.where(ilike(appUser.name, searchTerm));
    } else if (organizationId) {
      joinQuery.where(eq(appUser.organizationId, organizationId));
    }
    return await joinQuery;
  },
);

resolver.define(
  "getOrganizations",
  async (
    req,
  ): Promise<
    {
      id: number;
      name: string;
    }[]
  > => {
    return forgeSQL.select({ id: organization.id, name: organization.name }).from(organization);
  },
);

resolver.define(
  "createUser",
  async (
    req: Request<InferInsertModel<typeof appUser>>,
  ): Promise<{
    id: number;
    name: string;
    organizationId: number;
  }> => {
    const user = req.payload;
    const id = await forgeSQL.modify().insert(appUser, [user]);
    return {
      id,
      name: user.name ?? "",
      organizationId: user.organizationId ?? 0,
    };
  },
);

resolver.define(
  "getUserStats",
  async (
    req,
  ): Promise<{
    totalUsers: number;
    orgBreakdown: {
      [orgId: number]: number;
    };
  }> => {
    const totalUsers = await forgeSQL
      .fetch()
      .executeQueryOnlyOne(forgeSQL.select({ count: sql<number>`COUNT(*)` }).from(appUser));
    const organizations = await forgeSQL
      .select({ organizationId: appUser.organizationId, count: sql<number>`COUNT(*)` })
      .from(appUser)
      .groupBy(appUser.organizationId);
    const orgBreakdown: {
      [orgId: number]: number;
    } = [];
    organizations.forEach((o) => {
      orgBreakdown[o.organizationId] = o.count;
    });
    return { totalUsers: totalUsers?.count ?? 0, orgBreakdown };
  },
);

resolver.define("deleteUser", async (req: Request<{ id: number }>): Promise<void> => {
  const id = req.payload.id;
  if (id) {
    await forgeSQL.modify().deleteById(id, appUser);
  }
  throw new Error("Id is empty");
});

export const handler = resolver.getDefinitions();

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};

export const dropMigrations = () => {
  return dropSchemaMigrations();
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};
