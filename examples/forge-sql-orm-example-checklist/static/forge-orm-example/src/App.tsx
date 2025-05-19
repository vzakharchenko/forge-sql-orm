import React, { useEffect, useState } from "react";
import { invoke, showFlag } from "@forge/bridge";
import { observer } from "mobx-react";
import "./App.css";
import { FlagType } from "@forge/bridge/out/flag/flag";

interface CheckListData {
  checkList: string;
  updatedAt: Date;
  updateId: string;
  updateDisplayName: string;
  issueId: string;
}

async function showNotification(title: string, message: string, messageType: FlagType) {
  await showFlag({
    id: `checklist-${Date.now()}`,
    title,
    type: messageType,
    description: message,
    isAutoDismiss: true,
  });
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function LoadingOverlay() {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner" />
    </div>
  );
}

function App() {
  const [checklist, setChecklist] = useState<CheckListData>({
    checkList: "[]",
    issueId: "",
    updatedAt: new Date(),
    updateDisplayName: "",
    updateId: "",
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    loadChecklist();
  }, []);

  const loadChecklist = async () => {
    try {
      const response = await invoke<CheckListData>("getCheckList");
      setChecklist(response);
    } catch (err: any) {
      await showNotification(
        "Checklist Loading Error",
        "Unable to load the checklist. Please try again later.",
        "error",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (useLocking: boolean) => {
    try {
      setUpdating(true);
      const response = await invoke<{
        data?: CheckListData;
        error?: boolean;
        concurrent?: boolean;
        message?: string;
      }>(useLocking ? "updateWithOptimisticLocking" : "update", checklist);

      if (response.error) {
        if (response.concurrent) {
          await showNotification(
            "Concurrent Modification Detected",
            `User ${response.data?.updateDisplayName} has modified the checklist before you. Your changes could not be saved.`,
            "error",
          );
          await loadChecklist();
        } else {
          await showNotification(
            "Update Failed",
            response.message || "Unable to update the checklist. Please try again later.",
            "error",
          );
        }
      } else {
        if (response.data) {
          setChecklist(response.data);
          await showNotification(
            "Update Successful",
            "The checklist has been successfully updated",
            "success",
          );
        }
      }
    } catch (err: any) {
      await showNotification(
        "Update Error",
        "An error occurred while updating the checklist. Please try again later.",
        "error",
      );
    } finally {
      setUpdating(false);
    }
  };

  const toggleItem = (index: number) => {
    const newChecklist = [...JSON.parse(checklist.checkList)];
    newChecklist[index] = {
      ...newChecklist[index],
      done: !newChecklist[index].done,
    };
    setChecklist({ ...checklist, checkList: JSON.stringify(newChecklist) });
  };

  if (loading) {
    return (
      <div className="checklist-container">
        <LoadingOverlay />
      </div>
    );
  }

  return (
    <div className="checklist-container">
      {updating && <LoadingOverlay />}
      <div className="checklist-header">
        <h2>Issue Checklist</h2>
        <div className="last-update">
          Last updated by {checklist.updateDisplayName} on {formatDate(checklist.updatedAt)}
        </div>
      </div>
      <div className="checklist">
        {JSON.parse(checklist.checkList).map((item: any, index: any) => (
          <div key={index} className="checklist-item">
            <input type="checkbox" checked={item.done} onChange={() => toggleItem(index)} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => handleUpdate(true)}>Update with Locking</button>
        <button onClick={() => handleUpdate(false)}>Update without Locking</button>
      </div>
    </div>
  );
}

export default observer(App);
