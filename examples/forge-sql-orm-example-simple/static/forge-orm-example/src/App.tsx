import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import UserTable from "./components/UserTable";
import { observer } from "mobx-react";
import { useRootStore } from "./store";
import AddUserForm from "./components/AddUserForm";
import DuplicateTable from "./components/DuplicateTable";
import { UserResponse } from "./utils/Constants";
function App() {
  const { usersStore, stateStore } = useRootStore();

  useEffect(() => {
    const load = async () => {
      try {
        const users = await invoke<UserResponse[]>("fetch", {
          type: "USER",
          sortType: usersStore.sort,
        });
        usersStore.saveUsers(users);
      } finally {
        usersStore.stopLoading();
      }
    };
    load().catch(console.error);
  }, []);

  if (usersStore.isLoading) {
    return "loading....";
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
