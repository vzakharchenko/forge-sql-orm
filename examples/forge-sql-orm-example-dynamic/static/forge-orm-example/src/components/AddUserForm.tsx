import { observer } from "mobx-react";
import { useRootStore } from "../store";
import { useState } from "react";
import { invoke } from "@forge/bridge";
import { DynamicResponse } from "../utils/Constants";

export default observer(() => {
  const { usersMetadata, usersStore, stateStore } = useRootStore();
  const [formData, setFormData] = useState({});

  const handleChange = (event: any) => {
    const { name, value, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    await invoke("create", { data: formData });
    usersStore.loading();
    try {
      usersStore.saveUsers(await invoke<DynamicResponse[]>("fetch", { sortType: usersStore.sort }));
      stateStore.saveState("ROOT");
    } finally {
      usersStore.stopLoading();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Object.keys(usersMetadata.metadata.user.properties).map((p) => {
          let property = usersMetadata.metadata.user.properties[p];
          return (
            <div key={p}>
              <label htmlFor={p}>{p}</label>
              <br />
              <input
                type={
                  property.type === "integer" || property.type === "smallint" ? "number" : "text"
                }
                id={p}
                name={p}
                onChange={handleChange}
              />
              <br />
            </div>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
});
