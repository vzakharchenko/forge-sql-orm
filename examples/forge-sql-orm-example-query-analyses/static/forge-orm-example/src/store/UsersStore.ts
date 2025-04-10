import { action, makeObservable, observable } from "mobx";
import {ExplainAnalyzeRow, SlowQueryNormalized, ClusterStatementRowCamelCase} from "../utils/Constants";

export class UsersStore {
  @observable isLoading: boolean = false;
  @observable plan!: ExplainAnalyzeRow[];
  @observable planString!: string;
  @observable slowQueries!: SlowQueryNormalized[];
  @observable history!: ClusterStatementRowCamelCase[];

  constructor() {
    makeObservable(this);
  }

  @action.bound
  showPlan(plan: ExplainAnalyzeRow[], planString: string) {
    this.plan = plan;
    this.planString = planString;
    this.isLoading = false;
  }
  @action.bound
  saveSlowQuery(slowQueries: SlowQueryNormalized[]) {
    this.slowQueries = slowQueries;
  }
  @action.bound
  saveHistory(history: ClusterStatementRowCamelCase[]) {
    this.history = history;
  }

  @action loading() {
    this.isLoading = true;
  }

  @action stopLoading() {
    this.isLoading = false;
  }
}

export default new UsersStore();
