import { relations } from "drizzle-orm/relations";
import { demoUsers, demoOrders } from "./schema";

export const demoOrdersRelations = relations(demoOrders, ({ one }) => ({
  demoUser: one(demoUsers, {
    fields: [demoOrders.userId],
    references: [demoUsers.id],
  }),
}));

export const demoUsersRelations = relations(demoUsers, ({ many }) => ({
  demoOrders: many(demoOrders),
}));
