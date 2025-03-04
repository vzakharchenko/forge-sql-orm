import { EntitySchema } from 'forge-sql-orm';
import { Users } from './Users';

export class Orders {
  id!: number;
  user!: Users;
  userId!: number;
  product?: string;
}

export const OrdersSchema = new EntitySchema({
  class: Orders,
  properties: {
    id: { primary: true, type: 'integer', unsigned: false, autoincrement: false },
    user: {
      kind: 'm:1',
      entity: () => Users,
      fieldName: 'user_id',
      index: 'fk_orders_users',
    },
    userId: {
      type: 'integer',
      fieldName: 'user_id',
      persist: false,
      index: 'fk_orders_users',
    },
    product: { type: 'string', length: 200, nullable: true },
  },
});
