import { action, makeObservable, observable } from "mobx";
import { CreatedResponse, CreatedResponseDataType, UPDATE_TYPE } from "../utils/Constants";

type APP_STATE = "ROOT" | UPDATE_TYPE;

const DEFAULT_MESSAGE = "Loading ...";

class StateStore {
  @observable state: APP_STATE = "ROOT";
  @observable isLoading: boolean = true;
  @observable message: string = DEFAULT_MESSAGE;
  @observable testData!: CreatedResponseDataType;
  @observable testDataOptimisticNumber!: CreatedResponseDataType;
  @observable testDataOptimisticDateId!: CreatedResponseDataType;
  @observable testDataOptimisticTimeStampId!: CreatedResponseDataType;
  @observable testNonVersioningData: string = "";
  @observable testNumberVersioningData: string = "";
  @observable testDateVersioningData: string = "";
  @observable testTimestampVersioningData: string = "";

  constructor() {
    makeObservable(this);
  }

  @action.bound
  saveState(state: APP_STATE) {
    this.state = state;
  }

  @action.bound
  saveResponse(response: CreatedResponse) {
    this.testData = response.testDataId;
    this.testDataOptimisticNumber = response.testDataOptimisticNumberId;
    this.testDataOptimisticTimeStampId = response.testDataOptimisticTimeStampId;
    this.testDataOptimisticDateId = response.testDataOptimisticDateId;
  }

  @action.bound
  saveUpdateResponse(type: UPDATE_TYPE, response: string) {
    switch (type) {
      case "WITHOUT_VERSIONING": {
        this.testNonVersioningData = response;
        return;
      }
      case "OPTIMISTIC_DATE": {
        this.testDateVersioningData = response;
        return;
      }
      case "OPTIMISTIC_NUMBER": {
        this.testNumberVersioningData = response;
        return;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        this.testTimestampVersioningData = response;
        return;
      }
      default: {
        throw new Error("unsupported " + type);
      }
    }
  }

  @action.bound
  clearStates(type: UPDATE_TYPE) {
    switch (type) {
      case "WITHOUT_VERSIONING": {
        this.testNonVersioningData = "";
        return;
      }
      case "OPTIMISTIC_DATE": {
        this.testDateVersioningData = "";
        return;
      }
      case "OPTIMISTIC_NUMBER": {
        this.testNumberVersioningData = "";
        return;
      }
      case "OPTIMISTIC_TIMESTAMP": {
        this.testTimestampVersioningData = "";
        return;
      }
      default: {
        throw new Error("unsupported " + type);
      }
    }
  }

  @action loading(message?: string) {
    this.isLoading = true;
    this.message = message ?? DEFAULT_MESSAGE;
  }

  @action stopLoading() {
    this.isLoading = false;
    this.message = DEFAULT_MESSAGE;
  }
}

export default new StateStore();
