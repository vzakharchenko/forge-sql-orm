import { CreatedResponseDataType, UPDATE_TYPE } from "../utils/Constants";
import DynamicTable from "@atlaskit/dynamic-table";
import { createHead } from "../utils/TableUtils";
import { observer } from "mobx-react";
import { useRootStore } from "../store";
import { RowCellType } from "@atlaskit/dynamic-table/types";
import Button from "@atlaskit/button/new";

export default observer((props: { type: UPDATE_TYPE }) => {
  const { stateStore } = useRootStore();
  const head = createHead(true);
  let data: CreatedResponseDataType;
  switch (props.type) {
    case "WITHOUT_VERSIONING": {
      data = stateStore.testData;
      break;
    }
    case "OPTIMISTIC_NUMBER": {
      data = stateStore.testDataOptimisticNumber;
      break;
    }
    case "OPTIMISTIC_DATE": {
      data = stateStore.testDataOptimisticDateId;
      break;
    }
    case "OPTIMISTIC_TIMESTAMP": {
      data = stateStore.testDataOptimisticTimeStampId;
      break;
    }
    default: {
      return <div>Unsupported ${props.type}</div>;
    }
  }
  if (!data) {
    return <div>Try update first</div>;
  }
  return (
    <div>
      <div>
        <DynamicTable
          head={head}
          rows={[data].map((d, index) => {
            const cells: Array<RowCellType> = [
              { key: "id", content: d.id },
              { key: "testDateColumn", content: String(d.testDateColumn) },
              { key: "testNameColumn", content: d.testNameColumn },
              {
                key: "version",
                content: d.version !== undefined ? String(d.version) : "EMPTY",
              },
              {
                key: "action",
                content: (
                  <div>
                    <Button appearance={"warning"} onClick={() => stateStore.saveState(props.type)}>
                      update
                    </Button>
                  </div>
                ),
              },
            ];
            return {
              key: `row-${index}-${d.id}`,
              cells: cells,
            };
          })}
          rowsPerPage={10}
          defaultPage={1}
          loadingSpinnerSize="large"
          emptyView={<div>Table is EMPTY</div>}
          isRankable
        />
        <br />
        <br />
      </div>
    </div>
  );
});
