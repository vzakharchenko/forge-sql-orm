export * from "./dropMigrationWebTrigger";
export * from "./applyMigrationsWebTrigger";
export * from "./fetchSchemaWebTrigger";
export * from "./dropTablesMigrationWebTrigger";

export interface TriggerResponse<BODY> {
  body?: BODY;
  headers?: Record<string, string[]>;
  statusCode: number;
  statusText?: string;
}

export const getHttpResponse = <Body>(statusCode: number, body: Body): TriggerResponse<Body> => {
  let statusText = "";
  if (statusCode === 200) {
    statusText = "Ok";
  } else {
    statusText = "Bad Request";
  }

  return {
    headers: { "Content-Type": ["application/json"] },
    statusCode,
    statusText,
    body,
  };
};
