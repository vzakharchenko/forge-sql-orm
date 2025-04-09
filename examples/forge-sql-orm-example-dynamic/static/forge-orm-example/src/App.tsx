import React, { useEffect } from "react";
import { invoke } from "@forge/bridge";
import { DynamicResponse, Metadata } from "./utils/Constants";
import UserTable from "./components/UserTable";
import { observer } from "mobx-react";
import { useRootStore } from "./store";
import AddUserForm from "./components/AddUserForm";
import DuplicateTable from "./components/DuplicateTable";
function App() {
  const { usersStore, usersMetadata, stateStore } = useRootStore();

  useEffect(() => {
    const load = async () => {
      try {
        usersMetadata.saveMetadata(await invoke<Metadata>("fetchMetadata"));
        const users = await invoke<DynamicResponse[]>("fetch", {
          type: "USER",
          sortType: usersStore.sort,
        });
        usersStore.saveUsers(users);
      } finally {
        usersMetadata.stopLoading();
        usersStore.stopLoading();
      }
    };
    load().catch(console.error);
  }, []);

  if (usersStore.isLoading || usersMetadata.isLoading) {
    return "loading....";
  }
  if (!usersMetadata.metadata) {
    return <div>Loading Error</div>;
  }
  switch (stateStore.state) {
    case "ROOT":
      return (
        <div>
          <div>
            <button onClick={() => stateStore.saveState("ADD_USER")}>Add a new User</button>
            <br />
            <br />
            <UserTable />
          </div>
        </div>
      );
    case "DUPLICATE":
      return (
        <div>
          <div>
            <button onClick={() => stateStore.saveState("ROOT")}>back</button>
            <br />
            <br />
            <DuplicateTable />
          </div>
        </div>
      );
    case "ADD_USER":
      return (
        <div>
          <div>
            <button onClick={() => stateStore.saveState("ROOT")}>back</button>
            <br />
            <br />
            <AddUserForm />
          </div>
        </div>
      );
    default: {
      return <div>ERROR: unsupprted state ${stateStore.state}</div>;
    }
  }
}

export default observer(App);
