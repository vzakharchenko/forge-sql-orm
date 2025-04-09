import { MetadataProperties } from "./Constants";

const getCommonCells = (
  withWidth: boolean,
  sortable: boolean,
  deleteCell: boolean,
  tableMetadata: MetadataProperties,
) => {
  const columns = Object.keys(tableMetadata).map((key) => {
    return {
      key,
      content: key,
      isSortable: sortable,
      width: withWidth ? 25 : undefined,
    };
  });
  if (deleteCell) {
    columns.push({
      key: "delete",
      content: "Delete",
      isSortable: sortable,
      width: withWidth ? 25 : undefined,
    });
  }
  return columns;
};

export const createHead = (
  withWidth: boolean,
  sortable: boolean,
  deleteCell: boolean,
  tableMetadata: MetadataProperties,
) => {
  return {
    cells: getCommonCells(withWidth, sortable, deleteCell, tableMetadata),
  };
};
