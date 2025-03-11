import { action, makeObservable, observable } from "mobx";

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
