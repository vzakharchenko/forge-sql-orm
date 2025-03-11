import { action, makeObservable, observable } from "mobx";
import { FullContext } from "@forge/bridge/out/types";
import DynamicTable from "@atlaskit/dynamic-table";
import { Metadata } from "../utils/Constants";

export class UsersStore {
  @observable isLoading: boolean = true;
  @observable metadata!: Metadata;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  saveMetadata(metadata: Metadata) {
    this.metadata = metadata;
    this.isLoading = false;
  }

  @action loading() {
    this.isLoading = true;
  }

  @action stopLoading() {
    this.isLoading = false;
  }
}

export default new UsersStore();
