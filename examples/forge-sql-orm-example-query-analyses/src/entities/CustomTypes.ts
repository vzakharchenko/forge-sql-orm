import { customType } from "drizzle-orm/mysql-core";
import { stringify as uuidStringify } from "uuid";
import { sql } from "drizzle-orm";

export const uuidBinary = customType<{
  data: string;
  driverData: {
    type: "Buffer";
    data: number[];
  };
  config: [];
}>({
  dataType() {
    return "varbinary(16)";
  },
  toDriver(value) {
    return sql<{
      type: "Buffer";
      data: number[];
    }>`UUID_TO_BIN(${value})`;
  },
  fromDriver(value) {
    const arrayBufferBuffer = Buffer.from(value.data);
    const bytesArray = new Uint8Array(arrayBufferBuffer);
    if (bytesArray.length !== 16) {
      throw new Error(`Invalid UUID buffer length: ${bytesArray.length}`);
    }
    return uuidStringify(bytesArray);
  },
});
