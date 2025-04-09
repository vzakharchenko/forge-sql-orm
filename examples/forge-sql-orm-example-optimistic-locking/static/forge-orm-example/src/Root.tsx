import React, { ReactNode } from "react";
import { invoke } from "@forge/bridge";
import { observer } from "mobx-react";
import { useRootStore } from "./store";
import VersionTable from "./components/VersionTable";
import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";
import { token } from "@atlaskit/tokens";
import { UPDATE_TYPES } from "./utils/Constants";

import Button from "@atlaskit/button/new";

export const Panel = ({ children, testId }: { children: ReactNode; testId?: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      flexGrow: 1,
      backgroundColor: token("color.background.neutral"),
      borderRadius: "3px",
      color: token("color.text.subtlest"),
      font: token("font.heading.xxlarge"),
      marginBlockEnd: token("space.100", "8px"),
      marginBlockStart: token("space.200", "16px"),
      paddingBlockEnd: token("space.400", "32px"),
      paddingBlockStart: token("space.400", "32px"),
      paddingInlineEnd: token("space.400", "32px"),
      paddingInlineStart: token("space.400", "32px"),
    }}
    data-testid={testId}
  >
    {children}
  </div>
);

function Root() {
  const { stateStore } = useRootStore();

  if (stateStore.isLoading) {
    return "loading....";
  }

  return (
    <div>
      <div className="reset-section">
        <h2>Reset All</h2>
        <p>
          Click the button below to revert all test entities to their initial state. This removes
          any changes you've made during testing.
        </p>
        <br />
        <Button
          appearance={"danger"}
          onClick={async () => {
            try {
              stateStore.loading("Clear ...");
              await invoke<string>("clearAll", {
                testDataId: stateStore.testData?.id,
                testDataOptimisticNumberId: stateStore.testDataOptimisticNumber?.id,
                testDataOptimisticDateId: stateStore.testDataOptimisticDateId?.id,
                testDataOptimisticTimeStampId: stateStore.testDataOptimisticTimeStampId?.id,
              });
            } finally {
              stateStore.stopLoading();
            }
            window.location.reload();
          }}
        >
          {" "}
          Reset All
        </Button>
      </div>
      <br />
      <p>
        Use the tabs below to navigate between different examples of optimistic locking. Each tab
        demonstrates a different versioning approach, along with instructions on how to test the
        locking behavior.
      </p>
      <br />
      <Tabs
        onChange={(index) => console.log("Selected Tab", index + 1)}
        defaultSelected={1}
        id="default"
      >
        <TabList>
          {" "}
          {UPDATE_TYPES.map((e) => {
            switch (e) {
              case "WITHOUT_VERSIONING": {
                return <Tab key={e}>Entity Without Version Column (No Locking)</Tab>;
              }
              case "OPTIMISTIC_NUMBER": {
                return <Tab key={e}>Entity with Numeric Version Column</Tab>;
              }
              case "OPTIMISTIC_DATE": {
                return <Tab key={e}>Entity with Datetime-Based Version Column</Tab>;
              }
              case "OPTIMISTIC_TIMESTAMP": {
                return <Tab key={e}>Entity with Timestamp-BasedVersion Column</Tab>;
              }
            }
          })}
        </TabList>
        <TabPanel>
          <></>
        </TabPanel>
        <TabPanel>
          <Panel>
            <div>
              <h2>Entity Without Version Column (No Locking)</h2>
              <p>
                This entity does not use any versioning or optimistic locking mechanism. When two
                users open the same record in different browser tabs and both make changes, the last
                update simply overwrites the previous changes. There is no conflict detection in
                place.
              </p>
              <h3>How to Test</h3>
              <ol>
                <li>Open this entity's update form in two separate browser tabs.</li>
                <li>
                  In the first tab, change any field and click <strong>Update</strong>.
                </li>
                <li>
                  In the second tab, also change a field and click <strong>Update</strong>.
                </li>
                <li>
                  Both updates will succeed, and the second update will overwrite the first one.
                </li>
              </ol>
              <br />
              <VersionTable type={"WITHOUT_VERSIONING"} />
            </div>
          </Panel>
        </TabPanel>
        <TabPanel>
          <Panel>
            <div className="entity-section">
              <h2>Entity with Numeric Version Column</h2>
              <p>
                This entity uses an integer field for optimistic locking. When a user updates the
                record, the version number increments. A second user with an outdated version will
                encounter an error upon saving.
              </p>
              <h3>How to Test</h3>
              <ol>
                <li>Open this entity's update form in two separate browser tabs.</li>
                <li>
                  In the first tab, change any field and click <strong>Update</strong>. This
                  succeeds and increments the version number.
                </li>
                <li>In the second tab, attempt to update the record without refreshing.</li>
                <li>
                  The update will fail with an optimistic locking error, indicating the record was
                  modified elsewhere.
                </li>
              </ol>
              <br />
              <VersionTable type={"OPTIMISTIC_NUMBER"} />
            </div>
          </Panel>
        </TabPanel>
        <TabPanel>
          <Panel>
            <div className="entity-section">
              <h2>Entity with DateTime-Based Version Column</h2>
              <p>
                This entity uses a datetime field for optimistic locking. Whenever the record is
                updated, the date-based version changes. Any subsequent update with the old date
                value will fail.
              </p>
              <h3>How to Test</h3>
              <ol>
                <li>Open this entity's update form in two separate browser tabs.</li>
                <li>
                  In the first tab, change any field and click <strong>Update</strong>. This sets or
                  updates the date-based version.
                </li>
                <li>In the second tab, try to update the record without refreshing.</li>
                <li>
                  The second update will fail with an optimistic locking error because the version
                  date has changed.
                </li>
              </ol>
              <br />
              <VersionTable type={"OPTIMISTIC_DATE"} />
            </div>
          </Panel>
        </TabPanel>
        <TabPanel>
          <Panel>
            <div className="entity-section">
              <h2>Entity with Timestamp-Based Version Column</h2>
              <p>
                This entity uses a timestamp column for optimistic locking. Whenever the record is
                updated, the timestamp is refreshed. Any subsequent update attempts with an outdated
                timestamp will fail.
              </p>
              <h3>How to Test</h3>
              <ol>
                <li>Open this entity's update form in two separate browser tabs.</li>
                <li>
                  In the first tab, modify any field and click <strong>Update</strong>. This
                  refreshes the timestamp.
                </li>
                <li>In the second tab, try to update the record without reloading the page.</li>
                <li>
                  The second update will fail, indicating that another process has already changed
                  the record.
                </li>
              </ol>
              <br />
              <VersionTable type={"OPTIMISTIC_TIMESTAMP"} />
            </div>
          </Panel>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default observer(Root);
