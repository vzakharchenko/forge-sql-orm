import { action, makeObservable, observable } from "mobx";
import { FullContext } from "@forge/bridge/out/types";
import DynamicTable from "@atlaskit/dynamic-table";
import { DynamicResponse } from "../utils/Constants";

type APP_STATE = "ROOT" | "ADD_USER" | "DUPLICATE";

class StateStore {
  @observable state: APP_STATE = "ROOT";

  constructor() {
    makeObservable(this);
  }

  @action.bound
  saveState(state: APP_STATE) {
    this.state = state;
  }
}

export default new StateStore();
