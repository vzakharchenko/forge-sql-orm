import { action, makeObservable, observable } from "mobx";

type APP_STATE = "ROOT" | "SLOW_QUERY" | "HISTORY" | "PLAN";

class StateStore {
  @observable state: APP_STATE = "ROOT";
  @observable lastState: APP_STATE = "ROOT";

  constructor() {
    makeObservable(this);
  }

  @action.bound
  saveState(state: APP_STATE) {
    this.lastState = this.state;
    this.state = state;
  }
}

export default new StateStore();
