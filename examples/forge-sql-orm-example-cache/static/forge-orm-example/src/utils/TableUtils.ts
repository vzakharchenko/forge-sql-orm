const getCells = (withWidth: boolean, deleteCell: boolean, type: "USER" | "DUPLICATE") => {
  const columns: {
    key: string;
    content: any;
    isSortable: boolean;
    width: number | undefined;
  }[] = [];
  switch (type) {
    case "USER": {
      columns.push({
        key: "id",
        content: "ID",
        isSortable: true,
        width: withWidth ? 25 : undefined,
      });
      columns.push({
        key: "name",
        content: "NAME",
        isSortable: true,
        width: withWidth ? 25 : undefined,
      });
      columns.push({
        key: "email",
        content: "EMAIL",
        isSortable: true,
        width: withWidth ? 25 : undefined,
      });
      break;
    }
    case "DUPLICATE": {
      columns.push({
        key: "name",
        content: "NAME",
        isSortable: true,
        width: withWidth ? 25 : undefined,
      });
      columns.push({
        key: "email",
        content: "EMAIL",
        isSortable: true,
        width: withWidth ? 25 : undefined,
      });
      columns.push({
        key: "count",
        content: "COUNT",
        isSortable: true,
        width: withWidth ? 25 : undefined,
      });
    }
  }
  if (deleteCell) {
    columns.push({
      key: "delete",
      content: "Delete",
      isSortable: false,
      width: withWidth ? 25 : undefined,
    });
  }
  return columns;
};

export const createHead = (withWidth: boolean, deleteCell: boolean, type: "USER" | "DUPLICATE") => {
  return {
    cells: getCells(withWidth, deleteCell, type),
  };
};
