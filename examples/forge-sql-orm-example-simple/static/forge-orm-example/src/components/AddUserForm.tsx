import { observer } from "mobx-react";
import { useRootStore } from "../store";
import { useState } from "react";
import { invoke } from "@forge/bridge";
import { UserResponse } from "../utils/Constants";

export default observer(() => {
  const { usersStore, stateStore } = useRootStore();
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
    await invoke("create", { data: formData });
    usersStore.loading();
    try {
      usersStore.saveUsers(await invoke<UserResponse[]>("fetch", { sortType: usersStore.sort }));
      stateStore.saveState("ROOT");
    } finally {
      usersStore.stopLoading();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div key="name">
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" onChange={handleChange} />
          <br />
        </div>
        <div key="email">
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" id="email" name="email" onChange={handleChange} />
          <br />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
});
