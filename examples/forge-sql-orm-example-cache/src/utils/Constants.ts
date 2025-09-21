import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { demoOrders, demoUsers } from "../entities";

export type DemoUser = InferSelectModel<typeof demoUsers>;
export type NewDemoUser = InferInsertModel<typeof demoUsers>;

export type DemoOrder = InferSelectModel<typeof demoOrders>;
export type NewDemoOrder = InferInsertModel<typeof demoOrders>;

export type UserOrderRow = {
  userId: DemoUser["id"];
  userName: DemoUser["name"];
  productId: DemoOrder["id"] | null;
  product?: DemoOrder["product"] | null;
  sleep: number;
};

export type NewUserOrder = {
  userId?: DemoUser["id"];
  userName: DemoUser["name"];
  productId?: DemoOrder["id"];
  product: DemoOrder["product"];
};
