import { EntitySchema } from "forge-sql-orm";

export class Users {
  id!: number;
  name?: string;
  email?: string;
}

export const UsersSchema = new EntitySchema({
  class: Users,
  properties: {
    id: { primary: true, type: "integer", unsigned: false },
    name: { type: "string", length: 200, nullable: true },
    email: { type: "string", nullable: true },
  },
});
