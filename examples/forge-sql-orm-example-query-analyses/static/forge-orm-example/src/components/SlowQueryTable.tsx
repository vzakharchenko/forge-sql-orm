
import DynamicTable from "@atlaskit/dynamic-table";
import { createHead } from "../utils/TableUtils";
import { observer } from "mobx-react";
import { useRootStore } from "../store";
import { invoke } from "@forge/bridge";
import { RowCellType } from "@atlaskit/dynamic-table/types";
import {SlowQueryNormalized} from "../utils/Constants";
import stateStore from "../store/StateStore";

export default observer(() => {
  const { usersStore } = useRootStore();

  const head = createHead(true, false, "SLOW_QUERY");
  const slowQueries: SlowQueryNormalized[] = usersStore.slowQueries;
  if (!slowQueries || slowQueries.length === 0) {
    return <div>SlowQuery is EMPTY</div>;
  }
  return (
    <div>
      <div>
        <DynamicTable
          head={head}
          rows={slowQueries.map((d, index) => {
            const cells: Array<RowCellType> = [
              { key: "time", content: d.time },
              { key: "query", content: d.query },
              { key: "queryTime", content: d.queryTime },
              { key: "resultRows", content: d.resultRows },
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
