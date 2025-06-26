import Resolver from "@forge/resolver";
import { spawn } from "child_process";
import { sql } from "@forge/sql";
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
    return JSON.stringify(e);
  }
});

resolver.define("executeDDL", async (req): Promise<string> => {
  try {
    const query = req.payload.query;
    let result = await sql.executeDDL(query);
    return JSON.stringify(result);
  } catch (e) {
    console.error(e);
    return JSON.stringify(e);
  }
});

resolver.define("executeCommand", async (request) => {
  const { command } = request.payload;
  return new Promise((resolve, reject) => {
    // @ts-ignore
    const output: string[] = [];
    const proc = spawn(command, [], { shell: true });
    if (!proc.stdout) {
      output.push("stdout null");
    } else {
      proc.stdout.on("data", (data) => {
        output.push(data.toString());
      });
    }
    if (!proc.stderr) {
      output.push("stderr null");
    } else
      proc.stderr.on("data", (data) => {
        output.push(data.toString());
      });

    proc.on("close", (code) => {
      if (code !== 0) {
        const data = output.join("").concat(", code" + code) || "Command Error";
        resolve(JSON.stringify(data));
      } else {
        const data = output.join("") || "Command executed successfully";
        resolve(JSON.stringify(data));
      }
    });

    proc.on("error", (error) => {
      const data = output.join("").concat(", error)" + JSON.stringify(error)) || "Command Error";
      resolve(JSON.stringify(data));
    });
  });
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
