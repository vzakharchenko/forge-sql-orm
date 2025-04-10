import DynamicTable from "@atlaskit/dynamic-table";
import { createHead } from "../utils/TableUtils";
import { observer } from "mobx-react";
import { useRootStore } from "../store";
import { RowCellType } from "@atlaskit/dynamic-table/types";
import { ExplainAnalyzeRow } from "../utils/Constants";

export default observer(() => {
  const { usersStore } = useRootStore();

  const head = createHead(true, "PLAN");
  const plan: ExplainAnalyzeRow[] = usersStore.plan;
  if (!plan || plan.length === 0) {
    return <div>${usersStore.planString}</div>;
  }
  return (
    <div>
      <div>
        <DynamicTable
          head={head}
          rows={plan.map((d, index) => {
            const cells: Array<RowCellType> = [
              { key: "id", content: d.id },
              { key: "estRows", content: d.estRows },
              { key: "estCost", content: d.estCost },
              { key: "actRows", content: d.actRows },
              { key: "task", content: d.task },
              { key: "accessObject", content: d.accessObject },
              { key: "executionInfo", content: d.executionInfo },
              { key: "operatorInfo", content: d.operatorInfo },
              { key: "memory", content: d.memory },
              { key: "disk", content: d.disk },
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
