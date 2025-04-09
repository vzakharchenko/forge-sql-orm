import { sql } from 'drizzle-orm';
import { customType } from 'drizzle-orm/mysql-core';
import { stringify as uuidStringify } from 'uuid';

export const uuidBinary = customType<{
    data: string;
    driverData: Buffer;
    config: [];
}>({
    dataType() {
        return 'binary(16)'; // MySQL тип
    },
    toDriver(value) {
        console.error('toDriver='+value)
        return sql<{
            type: "Buffer";
            data: number[];
        }>`UUID_TO_BIN(${value})`
    },
    fromDriver(value) {
        console.error('fromDriver='+JSON.stringify(value))
        const bytesArray =
            value instanceof Buffer
                ? new Uint8Array(value)
                : Array.isArray((value as any)?.data)
                    ? new Uint8Array((value as any).data)
                    : new Uint8Array(value);

        if (bytesArray.length !== 16) {
            throw new Error(`Invalid UUID buffer length: ${bytesArray.length}`);
        }

        return uuidStringify(bytesArray);
    },
});
