import { relations } from "drizzle-orm/relations";
import { organization, appUser } from "./schema";

export const appUserRelations = relations(appUser, ({ one }) => ({
  organization: one(organization, {
    fields: [appUser.organizationId],
    references: [organization.id],
  }),
}));

export const organizationRelations = relations(organization, ({ many }) => ({
  appUsers: many(appUser),
}));
