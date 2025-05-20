import Resolver from "@forge/resolver";
import {sql} from "@forge/sql";
import { dropSchemaMigrations, applySchemaMigrations, fetchSchemaWebTrigger } from "forge-sql-orm";
import migration from "./migration";

const resolver = new Resolver();

resolver.define("execute", async (req): Promise<string> => {
    try {
        const query = req.payload.query;
        let result = await sql.executeRaw(query);
        return JSON.stringify(result);
    } catch (e) {
        console.error(e);
        return JSON.stringify(e)
    }
});

resolver.define("executeDDL", async (req): Promise<string> => {
    try {
        const query = req.payload.query;
        let result = await sql.executeDDL(query);
        return JSON.stringify(result);
    } catch (e) {
        console.error(e);
        return JSON.stringify(e)
    }
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
