
import DynamicTable from "@atlaskit/dynamic-table";
import { createHead } from "../utils/TableUtils";
import { observer } from "mobx-react";
import { useRootStore } from "../store";
import { invoke } from "@forge/bridge";
import { RowCellType } from "@atlaskit/dynamic-table/types";
import {ClusterStatementRowCamelCase, SlowQueryNormalized} from "../utils/Constants";
import stateStore from "../store/StateStore";

export default observer(() => {
  const { usersStore } = useRootStore();

  const head = createHead(true, false, "HISTORY");
  const history: ClusterStatementRowCamelCase[] = usersStore.history;
  if (!history || history.length === 0) {
    return <div>SlowQuery is EMPTY</div>;
  }
  return (
    <div>
      <div>
        <DynamicTable
          head={head}
          rows={history.map((d, index) => {
            const cells: Array<RowCellType> = [
              { key: "summaryBeginTime", content: d.summaryBeginTime },
              { key: "summaryEndTime", content: d.summaryEndTime },
              { key: "digestText", content: d.digestText },
              { key: "stmtType", content: d.stmtType },
              { key: "tableNames", content: d.tableNames },
              { key: "planHint", content: d.planHint },
                { key: "plan", content: !d.parsedPlan? <p></p>:<><button onClick={()=>{
                    if (d.parsedPlan){
                        usersStore.showPlan(d.parsedPlan, d.plan)
                        stateStore.saveState('PLAN')
                    }
                    }}>Show Plan</button></> },
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
