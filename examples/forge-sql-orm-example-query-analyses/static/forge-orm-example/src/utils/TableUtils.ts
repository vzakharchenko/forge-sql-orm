
const getCells = (withWidth: boolean, type: "SLOW_QUERY" | "PLAN" | "HISTORY") => {
  const columns: {
    key: string;
    content: any;
    isSortable: boolean;
    width: number | undefined;
  }[] = [];
  switch (type) {
    case "SLOW_QUERY": {
      columns.push({
        key: "time",
        content: "Time",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "query",
        content: "QUERY",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "queryTime",
        content: "TIME",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "resultRows",
        content: "ROWS",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "plan",
        content: "PLAN",
        isSortable: true,
        width: withWidth ? 25 : undefined,
      });
      break;
    }
    case "HISTORY": {
      columns.push({
        key: "summaryBeginTime",
        content: "summaryBeginTime",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "summaryEndTime",
        content: "summaryEndTime",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "stmtType",
        content: "stmtType",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "digestText",
        content: "digestText",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "tableNames",
        content: "tableNames",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "planHint",
        content: "planHint",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "plan",
        content: "PLAN",
        isSortable: true,
        width: withWidth ? 25 : undefined,
      });
      break;
    }
    case "PLAN": {
      columns.push({
        key: "id",
        content: "Id",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "estRows",
        content: "estRows",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "estCost",
        content: "estCost",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "actRows",
        content: "actRows",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "task",
        content: "task",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "accessObject",
        content: "accessObject",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "executionInfo",
        content: "executionInfo",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "operatorInfo",
        content: "operatorInfo",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "memory",
        content: "memory",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
      columns.push({
        key: "disk",
        content: "disk",
        isSortable: true,
        width: withWidth ? 10 : undefined,
      });
    }
  }
  return columns;
};

export const createHead = (withWidth: boolean, type: "SLOW_QUERY" | "PLAN" | "HISTORY") => {
  return {
    cells: getCells(withWidth, type),
  };
};
