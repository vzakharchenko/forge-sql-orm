const getCells = (withWidth: boolean) => {
  const columns: {
    key: string;
    content: any;
    isSortable: boolean;
    width: number | undefined;
  }[] = [];
  columns.push({
    key: "id",
    content: "ID",
    isSortable: false,
    width: withWidth ? 25 : undefined,
  });
  columns.push({
    key: "testDateColumn",
    content: "example Datetime",
    isSortable: false,
    width: withWidth ? 25 : undefined,
  });
  columns.push({
    key: "testNameColumn",
    content: "Name",
    isSortable: false,
    width: withWidth ? 25 : undefined,
  });
  columns.push({
    key: "version",
    content: "Version",
    isSortable: false,
    width: withWidth ? 25 : undefined,
  });
  columns.push({
    key: "Action",
    content: "Action",
    isSortable: false,
    width: withWidth ? 25 : undefined,
  });
  return columns;
};

export const createHead = (withWidth: boolean) => {
  return {
    cells: getCells(withWidth),
  };
};
