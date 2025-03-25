import { observer } from "mobx-react";
import { useRootStore } from "../store";
import { useState } from "react";
import { CreatedResponse, CreatedResponseDataType, UPDATE_TYPE } from "../utils/Constants";
import { invoke } from "@forge/bridge";

export default observer((props: { type: UPDATE_TYPE }) => {
  const { stateStore } = useRootStore();
  const [status, setStatus] = useState<string>("");
  const [formData, setFormData] = useState<{ testNameColumn?: string; testDateColumn?: string }>(
    {},
  );

  const handleChange = (event: any) => {
    const { name, value, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const newData = { ...data };
    if (formData.testNameColumn) {
      newData.testNameColumn = formData.testNameColumn;
    }
    if (formData.testDateColumn) {
      newData.testDateColumn = new Date(formData.testDateColumn);
    }

    const status: string = await invoke<string>("update", {
      data: newData,
      objectName: props.type,
    });
    setStatus(status);
  };

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
  return (
    <div>
      <div>
        <button
          onClick={async () => {
            try {
              stateStore.loading();
              const createdResponse = await invoke<CreatedResponse>("fetchOrCreateIfNotExists");
              stateStore.saveResponse(createdResponse);
            } finally {
              stateStore.stopLoading();
            }
            stateStore.saveState("ROOT");
          }}
        >
          Back to main
        </button>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div key="testNameColumn">
          <label htmlFor="testNameColumn">Name</label>
          <br />
          <input
            type="text"
            id="testNameColumn"
            name="testNameColumn"
            defaultValue={data.testNameColumn}
            onChange={handleChange}
          />
          <br />
        </div>
        <div key="testDateColumn">
          <label htmlFor="testDateColumn">dateTime</label>
          <br />
          <input
            type="datetime-local"
            id="testDateColumn"
            name="testDateColumn"
            defaultValue={String(data.testDateColumn)}
            onChange={handleChange}
          />
          <br />
        </div>
        <br />
        <input type="submit" value="Submit" disabled={Object.keys(formData).length === 0} />
      </form>
      <br />
      <br />
      {status ? (
        <div>
          <p>STATUS:</p>
          <b> {status}</b>
        </div>
      ) : null}
    </div>
  );
});
