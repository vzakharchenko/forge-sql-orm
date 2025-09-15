import Resolver, { Request } from "@forge/resolver";

import ForgeSQL, {
  applySchemaMigrations,
  dropSchemaMigrations,
  fetchSchemaWebTrigger,
} from "forge-sql-orm";
import { eq } from "drizzle-orm";
import { additionalMetadata, issueCheckList } from "./entities";
import api, { route } from "@forge/api";
import migration from "./migration";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL({ logRawSqlQuery: true, additionalMetadata: additionalMetadata });

const db = forgeSQL.getDrizzleQueryBuilder();

interface CheckListData {
  checkList: string;
  updatedAt: Date;
  updateId: string;
  updateDisplayName: string;
  issueId: string;
}

const defaultChecklist = [
  { label: "Feature flags verified", done: false },
  { label: "Support team notified", done: false },
  { label: "Release notes added", done: false },
  { label: "Linked issues closed", done: false },
  { label: "Changelog updated", done: false },
];

async function getCurrentUserInfo(): Promise<{ accountId: string; displayName: string }> {
  const response = await api.asUser().requestJira(route`/rest/api/3/myself`, {
    headers: {
      Accept: "application/json",
    },
  });
  return await response.json();
}

async function fetchCheckList(issueId: string): Promise<CheckListData | null> {
  const result = await forgeSQL
    .fetch()
    .executeQueryOnlyOne(
      forgeSQL
        .select({ issueCheckList })
        .from(issueCheckList)
        .where(eq(issueCheckList.issueId, issueId)),
    );

  if (!result?.issueCheckList) {
    return null;
  }

  const checkList = result.issueCheckList;
  return {
    checkList: checkList.checkList as string,
    updatedAt: checkList.updatedAt,
    updateId: checkList.updateId,
    updateDisplayName: checkList.updateDisplayName,
    issueId,
  };
}

async function createCheckList(issueId: string): Promise<CheckListData> {
  const userInfo = await getCurrentUserInfo();
  const newCheckList = {
    checkList: JSON.stringify(defaultChecklist),
    updatedAt: new Date(),
    updateId: userInfo.accountId,
    updateDisplayName: userInfo.displayName,
    issueId,
  };

  try {
    await forgeSQL.insert(issueCheckList).values([newCheckList]);
  } catch (e: any) {
    console.warn("Cannot insert checklist:", e.message, e);
    throw new Error("Cannot create issueCheckList");
  }

  const result = await fetchCheckList(issueId);
  if (!result) {
    throw new Error("Cannot create issueCheckList");
  }
  return result;
}

resolver.define("getCheckList", async (request): Promise<CheckListData> => {
  try {
    const issueId = request.context?.extension?.issue?.key;
    if (!issueId) {
      throw new Error("Issue Id is null");
    }

    const existingCheckList = await fetchCheckList(issueId);
    if (existingCheckList) {
      return existingCheckList;
    }

    return await createCheckList(issueId);
  } catch (e: any) {
    console.error(e);
    if (e?.context?.debug) {
      throw new Error(e.context.debug.message);
    }
    throw e;
  }
});

resolver.define(
  "updateWithOptimisticLocking",
  async (
    request: Request<CheckListData>,
  ): Promise<{ data?: CheckListData; error?: boolean; concurrent?: boolean; message?: string }> => {
    const payload: CheckListData = request.payload;
    if (!payload) {
      return { error: true, concurrent: false, message: "Payload is empty" };
    }

    try {
      const userInfo = await getCurrentUserInfo();
      payload.updateId = userInfo.accountId;
      payload.updateDisplayName = userInfo.displayName;
      await forgeSQL.update(issueCheckList).set(payload).where(eq(issueCheckList.issueId, payload.issueId));

      const updatedCheckList = await fetchCheckList(payload.issueId);
      if (!updatedCheckList) {
        return { error: true, concurrent: false, message: "Record does not exist" };
      }

      return { data: updatedCheckList };
    } catch (e) {
      console.warn("Concurrent modification:", e);
      const currentCheckList = await fetchCheckList(payload.issueId);
      if (!currentCheckList) {
        return { error: true, concurrent: false, message: "Record does not exist" };
      }
      return { data: currentCheckList, error: true, concurrent: true };
    }
  },
);

resolver.define(
  "update",
  async (
    request: Request<CheckListData>,
  ): Promise<{ data?: CheckListData; error?: boolean; concurrent?: boolean; message?: string }> => {
    const payload: CheckListData = request.payload;
    if (!payload) {
      return { error: true, concurrent: false, message: "Payload is empty" };
    }

    try {
      const userInfo = await getCurrentUserInfo();
      payload.updatedAt = new Date();
      payload.updateId = userInfo.accountId;
      payload.updateDisplayName = userInfo.displayName;

      await db
        .update(issueCheckList)
        .set(payload)
        .where(eq(issueCheckList.issueId, payload.issueId));

      const updatedCheckList = await fetchCheckList(payload.issueId);
      if (!updatedCheckList) {
        return { error: true, concurrent: false, message: "Record does not exist" };
      }

      return { data: updatedCheckList };
    } catch (e) {
      console.error("Update error:", JSON.stringify(e));
      return { error: true, concurrent: false, message: JSON.stringify(e) };
    }
  },
);

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
