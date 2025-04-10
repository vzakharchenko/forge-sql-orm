import React from "react";
import { invoke } from "@forge/bridge";
import { observer } from "mobx-react";
import { useRootStore } from "./store";
import {SlowQueryNormalized} from "./utils/Constants";
import SlowQueryTable from "./components/SlowQueryTable";
import PlanTable from "./components/PlanTable";
import {ClusterStatementRowCamelCase, ExplainAnalyzeRow} from "forge-sql-orm";
import HistoryTable from "./components/HistoryTable";
import "./App.css"

function App() {
  const { usersStore, stateStore } = useRootStore();

  if (usersStore.isLoading) {
    return "loading....";
  }

  const handleExplainDrizzle = async () => {
    usersStore.loading();
    try {
      const plan = await invoke<ExplainAnalyzeRow[]>('explain');
      usersStore.showPlan(plan, 'Plan does not exists');
      stateStore.saveState('PLAN');
    } finally {
      usersStore.stopLoading();
    }
  };

  const handleExplainRaw = async () => {
    usersStore.loading();
    try {
      const plan = await invoke<ExplainAnalyzeRow[]>('explainRaw', {
        sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`"
      });
      usersStore.showPlan(plan, 'Plan does not exists');
      stateStore.saveState('PLAN');
    } finally {
      usersStore.stopLoading();
    }
  };

  const handleExplainAnalyzeDrizzle = async () => {
    usersStore.loading();
    try {
      const plan = await invoke<ExplainAnalyzeRow[]>('explainAnalyze');
      usersStore.showPlan(plan, 'Plan does not exists');
      stateStore.saveState('PLAN');
    } finally {
      usersStore.stopLoading();
    }
  };

  const handleExplainAnalyzeRaw = async () => {
    usersStore.loading();
    try {
      const plan = await invoke<ExplainAnalyzeRow[]>('explainAnalyseRaw', {
        sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`"
      });
      usersStore.showPlan(plan, 'Plan does not exists');
      stateStore.saveState('PLAN');
    } finally {
      usersStore.stopLoading();
    }
  };

  const handleExecuteDrizzle = async () => {
    usersStore.loading();
    try {
      await invoke('drizzleQuery');
    } finally {
      usersStore.stopLoading();
    }
  };

  const handleShowHistory = async () => {
    usersStore.loading();
    try {
      const history = await invoke<ClusterStatementRowCamelCase[]>('analyzeQueriesHistory', {
        sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`"
      });
      usersStore.saveHistory(history);
      stateStore.saveState('HISTORY');
    } finally {
      usersStore.stopLoading();
    }
  };

  const handleGenerateSlowQuery = async () => {
    usersStore.loading();
    try {
      await invoke('createSlowQuery');
    } finally {
      usersStore.stopLoading();
    }
  };

  const handleAnalyzeSlowQueries = async () => {
    usersStore.loading();
    try {
      const slowQueryNormalizeds = await invoke<SlowQueryNormalized[]>("analyzeSlowQueries");
      usersStore.saveSlowQuery(slowQueryNormalizeds);
      stateStore.saveState("SLOW_QUERY");
    } finally {
      usersStore.stopLoading();
    }
  };

  switch (stateStore.state) {
    case "ROOT":
      return (
        <div className="query-analysis-container">
          {/* Query Plan Analysis Section */}
          <section className="analysis-section">
            <h2>Query Plan Analysis</h2>
            <div className="query-example">
              <pre>
                {`EXPLAIN select category.id, category.name, order_item.id, order_item.product_id, 
order_item.quantity, product.id, product.name, product.category_id 
from category 
left join product on category.id = product.category_id 
inner join order_item on order_item.product_id = product.id`}
              </pre>
            </div>
            <div className="button-group">
              <button onClick={handleExplainDrizzle}>Explain Drizzle Query</button>
              <button onClick={handleExplainRaw}>Explain Raw Query</button>
            </div>
          </section>

          <div className="section-spacer" />

          {/* Query Plan Analysis with Execution Stats Section */}
          <section className="analysis-section">
            <h2>Query Plan Analysis with Execution Stats</h2>
            <div className="query-example">
              <pre>
                {`EXPLAIN ANALYZE select category.id, category.name, order_item.id, order_item.product_id, 
order_item.quantity, product.id, product.name, product.category_id 
from category 
left join product on category.id = product.category_id 
inner join order_item on order_item.product_id = product.id`}
              </pre>
            </div>
            <div className="button-group">
              <button onClick={handleExplainAnalyzeDrizzle}>Explain Analyze Drizzle Query</button>
              <button onClick={handleExplainAnalyzeRaw}>Explain Analyze Raw Query</button>
            </div>
          </section>

          <div className="section-spacer" />

          {/* Query History Analysis Section */}
          <section className="analysis-section">
            <h2>Query History Analysis</h2>
            <div className="button-group">
              <button onClick={handleExecuteDrizzle}>Execute Query</button>
              <button onClick={handleShowHistory}>Show Query History</button>
            </div>
          </section>

          <div className="section-spacer" />

          {/* Slow Query Analysis Section */}
          <section className="analysis-section">
            <h2>Slow Query Analysis</h2>
            <div className="button-group">
              <button onClick={handleGenerateSlowQuery}>Generate Slow Query</button>
              <button onClick={handleAnalyzeSlowQueries}>Analyze Slow Queries</button>
            </div>
          </section>
        </div>
      );

    case "SLOW_QUERY":
      return (
        <div className="analysis-results">
          <button className="back-button" onClick={() => stateStore.saveState("ROOT")}>Back to Analysis</button>
          <div className="results-spacer" />
          <SlowQueryTable />
        </div>
      );

    case "HISTORY":
      return (
        <div className="analysis-results">
          <button className="back-button" onClick={() => stateStore.saveState("ROOT")}>Back to Analysis</button>
          <div className="results-spacer" />
          <HistoryTable />
        </div>
      );

    case "PLAN":
      return (
        <div className="analysis-results">
          <button className="back-button" onClick={() => stateStore.saveState(stateStore.lastState)}>Back to Analysis</button>
          <div className="results-spacer" />
          <PlanTable />
        </div>
      );

    default:
      return <div>ERROR: unsupported state {stateStore.state}</div>;
  }
}

export default observer(App);
