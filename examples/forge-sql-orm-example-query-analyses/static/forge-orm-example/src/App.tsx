import React from "react";
import { invoke } from "@forge/bridge";
import { observer } from "mobx-react";
import { useRootStore } from "./store";
import { SlowQueryNormalized } from "./utils/Constants";
import SlowQueryTable from "./components/SlowQueryTable";
import PlanTable from "./components/PlanTable";
import { ClusterStatementRowCamelCase, ExplainAnalyzeRow } from "forge-sql-orm";
import HistoryTable from "./components/HistoryTable";
import "./App.css";
import {showError} from "./utils/ErrorUtils";

function App() {
  const { usersStore, stateStore } = useRootStore();
  if (usersStore.isLoading) {
    return "loading....";
  }

  const handleExplainDrizzle = async () => {
    usersStore.loading();
    try {
      const plan = await invoke<ExplainAnalyzeRow[]>("explain");
      usersStore.showPlan(plan, "Plan does not exists");
      stateStore.saveState("PLAN");
    } catch (e:any) {
      console.error(e);
      showError('explain error', e.message)
    }
    finally {
      usersStore.stopLoading();
    }
  };

  const handleExplainDrizzleNoIndex = async () => {
    usersStore.loading();
    try {
      const plan = await invoke<ExplainAnalyzeRow[]>("explainWith");
      usersStore.showPlan(plan, "Plan does not exists");
      stateStore.saveState("PLAN");
    } catch (e:any) {
      console.error(e);
      showError('explain error', e.message)
    }
    finally {
      usersStore.stopLoading();
    }
  };


  const handleExplainAnalyzeDrizzle = async () => {
    usersStore.loading();
    try {
      const plan = await invoke<ExplainAnalyzeRow[]>("explainAnalyze");
      usersStore.showPlan(plan, "Plan does not exists");
      stateStore.saveState("PLAN");
    } catch (e:any) {
      console.error(e);
      showError('explain analyze error', e.message)
    } finally {
      usersStore.stopLoading();
    }
  };
  const handleExplainAnalyzeDrizzleNoIndex = async () => {
    usersStore.loading();
    try {
      const plan = await invoke<ExplainAnalyzeRow[]>("explainAnalyzeWith");
      usersStore.showPlan(plan, "Plan does not exists");
      stateStore.saveState("PLAN");
    } catch (e:any) {
      console.error(e);
      showError('explain analyze error', e.message)
    } finally {
      usersStore.stopLoading();
    }
  };

  const handleExecuteQuery = async () => {
    usersStore.loading();
    try {
       await invoke("executeQuery");
    } catch (e:any) {
      console.error(e);
      showError('execute query error', e.message)
    } finally {
      usersStore.stopLoading();
    }
  };
  const handleExecuteQueryNoIndex = async () => {
    usersStore.loading();
    try {
       await invoke("executeQueryWith");
    } catch (e:any) {
      console.error(e);
      showError('execute query error', e.message)
    } finally {
      usersStore.stopLoading();
    }
  };


  const handleOptimizeQuery = async () => {
    usersStore.loading();
    try {
       await invoke<number>("optimizeQuery");
    } catch (e:any) {
      console.error(e);
      showError('Optimize error', e.message)
    } finally {
      usersStore.stopLoading();
    }
  };
  const handleOptimizeQueryNoIndex = async () => {
    usersStore.loading();
    try {
       await invoke<number>("optimizeQueryCTE");
    } catch (e:any) {
      console.error(e);
      showError('Optimize error', e.message)
    } finally {
      usersStore.stopLoading();
    }
  };

  const handledDropStats = async () => {
    usersStore.loading();
    try {
       await invoke<number>("dropStats");
    } catch (e:any) {
      console.error(e);
      showError('dropStats error', e.message)
    } finally {
      usersStore.stopLoading();
    }
  };
  const handleDeOptimizeQuery = async () => {
    usersStore.loading();
    try {
       await invoke<number>("deOptimizeQuery");
    } catch (e:any) {
      console.error(e);
      showError('deoptimize error', e.message)
    } finally {
      usersStore.stopLoading();
    }
  };

  const handleShowHistory = async () => {
    usersStore.loading();
    try {
      const history = await invoke<ClusterStatementRowCamelCase[]>("analyzeQueriesHistory", {
        sql: "select `category`.`id` as `a_category_category_id`, `category`.`name` as `a_category_category_name`, `order_item`.`id` as `a_orderitem_order_item_id`, `order_item`.`product_id` as `a_orderitem_order_item_product_id`, `order_item`.`quantity` as `a_orderitem_order_item_quantity`, `product`.`id` as `a_product_product_id`, `product`.`name` as `a_product_product_name`, `product`.`category_id` as `a_product_product_category_id` from `category` left join `product` on `category`.`id` = `product`.`category_id` inner join `order_item` on `order_item`.`product_id` = `product`.`id`",
      });
      usersStore.saveHistory(history);
      stateStore.saveState("HISTORY");
    } catch (e:any) {
      console.error(e);
      showError('History error', e.message)
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
    } catch (e:any) {
      console.error(e);
      showError('Slowquery error', e.message)
    } finally {
      usersStore.stopLoading();
    }
  };

  switch (stateStore.state) {
    case "ROOT":
      return (
        <div className="query-analysis-container">

          <div className="section-spacer" />

          <section className="analysis-section">
            <h2>Stage 1: Initial Query Analysis</h2>
            <div className="query-example">
              <pre>
                SELECT
  `category`.`name` AS `a_categoryname_name`,
  `product`.`name` AS `a_productname_name`,
  `order_item`.`quantity` AS `a_orderitemquantity_quantity`
FROM `order_item`
LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id`
LEFT JOIN `category` ON `product`.`category_id` = `category`.`id`
ORDER BY `order_item`.`created_at` ASC
LIMIT 10 OFFSET 50000;
              </pre>
            </div>
            <div className="button-group">
              <div className="button-row">
                <button onClick={handleExecuteQuery}>1. Execute SQL</button>
                <button onClick={handleExplainDrizzle}>2. Explain (optional) </button>
                <button onClick={handleExplainAnalyzeDrizzle}>3. Explain Analyze</button>
              </div>
            </div>
          </section>

          <section className="analysis-section">
            <h2>Stage 2: Adding Indexes — Better but Not Yet Great</h2>
            <div className="query-example">
              <pre>
                SELECT
  `category`.`name` AS `a_categoryname_name`,
  `product`.`name` AS `a_productname_name`,
  `order_item`.`quantity` AS `a_orderitemquantity_quantity`
FROM `order_item`
LEFT JOIN `product` ON `order_item`.`product_id` = `product`.`id`
LEFT JOIN `category` ON `product`.`category_id` = `category`.`id`
ORDER BY `order_item`.`created_at` ASC
LIMIT 10 OFFSET 50000;
              </pre>
            </div>
            <div className="button-group">
              <div className="button-row">
                <button onClick={handleOptimizeQuery}>4. Add optimization indexes</button>
                <button onClick={handleExecuteQuery}>5. Execute SQL</button>
                <button onClick={handleExplainDrizzle}>6. Explain (optional) </button>
                <button onClick={handleExplainAnalyzeDrizzle}>7. Explain Analyze</button>
              </div>
            </div>
          </section>

          <section className="analysis-section">
            <h2>Stage 3: Optimizing with WITH Clause — Smarter Pagination</h2>
            <div className="query-example">
              <pre>
WITH withQuery AS (
  SELECT id, product_id, product_name, quantity, created_at
  FROM order_item
  ORDER BY created_at ASC
  LIMIT 10 OFFSET 350000
)
SELECT category.name, withQuery.quantity, product.name
FROM withQuery
LEFT JOIN product ON withQuery.product_id = product.id
LEFT JOIN category ON category.id = product.category_id;
              </pre>
            </div>
            <div className="button-group">
              <div className="button-row">
                <button onClick={handleExecuteQueryNoIndex}>8. Execute CTE</button>
                <button onClick={handleExplainDrizzleNoIndex}>9. Explain CTE  (optional)</button>
                <button onClick={handleExplainAnalyzeDrizzleNoIndex}>10. Explain Analyze CTE</button>
              </div>
            </div>
          </section>


          <section className="analysis-section">
            <h2>Stage 4: Final Optimization — Goodbye Full Table Scans</h2>
            <div className="query-example">
              <pre>
WITH withQuery AS (
  SELECT id, product_id, product_name, quantity, created_at
  FROM order_item
  ORDER BY created_at ASC
  LIMIT 10 OFFSET 350000
)
SELECT category.name, withQuery.quantity, product.name
FROM withQuery
LEFT JOIN product ON withQuery.product_id = product.id
LEFT JOIN category ON category.id = product.category_id;
              </pre>
            </div>
            <div className="button-group">
              <div className="button-row">
                <button onClick={handleOptimizeQueryNoIndex}>9. Add optimization indexes for CTE</button>
                <button onClick={handleExecuteQueryNoIndex}>10. Execute CTE</button>
                <button onClick={handleExplainDrizzleNoIndex}>11. Explain CTE (optional)</button>
                <button onClick={handleExplainAnalyzeDrizzleNoIndex}>12. Explain Analyze CTE</button>
              </div>
            </div>
          </section>

          <section className="analysis-section">
            <h2>Additional action</h2>
            <div className="button-group">
          <div className="button-row">
            <button onClick={handleDeOptimizeQuery}>Drop indexes(back to Stage 1)</button>
            <button onClick={handledDropStats}>DROP STATS from all tables</button>
          </div>
            </div>
          </section>

          <div className="section-spacer" />

          {/* Query History Analysis Section */}
          <section className="analysis-section">
            <h2>Query History Analysis</h2>
            <div className="button-group">
              <button onClick={handleShowHistory}>Show Query History</button>
            </div>
          </section>

          <div className="section-spacer" />

          {/* Slow Query Analysis Section */}
          <section className="analysis-section">
            <h2>Slow Query Analysis</h2>
            <div className="button-group">
              <button onClick={handleAnalyzeSlowQueries}>Analyze Slow Queries</button>
            </div>
          </section>
        </div>
      );

    case "SLOW_QUERY":
      return (
        <div className="analysis-results">
          <button className="back-button" onClick={() => stateStore.saveState("ROOT")}>
            Back to Analysis
          </button>
          <div className="results-spacer" />
          <SlowQueryTable />
        </div>
      );

    case "HISTORY":
      return (
        <div className="analysis-results">
          <button className="back-button" onClick={() => stateStore.saveState("ROOT")}>
            Back to Analysis
          </button>
          <div className="results-spacer" />
          <HistoryTable />
        </div>
      );

    case "PLAN":
      return (
        <div className="analysis-results">
          <button
            className="back-button"
            onClick={() => stateStore.saveState(stateStore.lastState)}
          >
            Back to Analysis
          </button>
          <div className="results-spacer" />
          <PlanTable />
        </div>
      );

    default:
      return <div>ERROR: unsupported state {stateStore.state}</div>;
  }
}

export default observer(App);
