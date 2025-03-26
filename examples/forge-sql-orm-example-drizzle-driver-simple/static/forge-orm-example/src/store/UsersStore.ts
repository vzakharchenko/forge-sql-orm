import { action, makeObservable, observable } from "mobx";
import { DuplicateResponse, UserResponse } from "../utils/Constants";

export class UsersStore {
  @observable isLoading: boolean = true;
  @observable users!: UserResponse[];
  @observable duplicates!: DuplicateResponse[];

  @observable sort?: { name: string; sortType: "DESC" | "ASC" };

  constructor() {
    makeObservable(this);
  }

  @action.bound
  saveUsers(users: UserResponse[]) {
    this.users = users;
    this.isLoading = false;
  }
  @action.bound
  saveSort(sort: { name: string; sortType: "DESC" | "ASC" }) {
    this.sort = sort;
  }
  @action.bound
  saveDuplicates(duplicates: DuplicateResponse[]) {
    this.duplicates = duplicates;
  }

  @action loading() {
    this.isLoading = true;
  }

  @action stopLoading() {
    this.isLoading = false;
  }
}

export default new UsersStore();
