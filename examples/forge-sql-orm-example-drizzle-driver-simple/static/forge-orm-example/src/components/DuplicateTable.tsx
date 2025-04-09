import { DuplicateResponse } from "../utils/Constants";
import DynamicTable from "@atlaskit/dynamic-table";
import { createHead } from "../utils/TableUtils";
import { observer } from "mobx-react";
import { useRootStore } from "../store";
import { invoke } from "@forge/bridge";
import { RowCellType } from "@atlaskit/dynamic-table/types";

export default observer(() => {
  const { usersStore } = useRootStore();
  const head = createHead(true, false, "DUPLICATE");
  const users: DuplicateResponse[] = usersStore.duplicates;
  if (!users || users.length === 0) {
    return <div>Duplicate Table is EMPTY</div>;
  }
  return (
    <div>
      <div>
        <DynamicTable
          head={head}
          onSort={async (data: { key: string; sortOrder: "ASC" | "DESC" }) => {
            let sortType = {
              name: data.key,
              sortType: data.sortOrder,
            };
            usersStore.loading();
            try {
              const users = await invoke<DuplicateResponse[]>("duplicate", { sortType: sortType });
              usersStore.saveDuplicates(users);
            } finally {
              usersStore.stopLoading();
            }
          }}
          rows={users.map((d, index) => {
            const cells: Array<RowCellType> = [
              { key: "name", content: d.name },
              { key: "email", content: d.email },
              { key: "count", content: d.count },
            ];
            return {
              key: `row-${index}`,
              cells: cells,
            };
          })}
          rowsPerPage={5}
          defaultPage={1}
          loadingSpinnerSize="large"
          emptyView={<div>Duplicate Table is EMPTY</div>}
          isRankable
        />
        <br />
        <br />
      </div>
    </div>
  );
});
