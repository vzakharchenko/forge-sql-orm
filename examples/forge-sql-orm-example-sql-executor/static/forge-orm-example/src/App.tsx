import { useState } from "react";
import { invoke } from "@forge/bridge";

interface QueryHistory {
  id: number;
  query: string;
  result: string;
  timestamp: Date;
  type: "SQL" | "DDL" | "COMMAND";
}

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDDL, setIsLoadingDDL] = useState(false);
  const [isLoadingCommand, setIsLoadingCommand] = useState(false);
  const [history, setHistory] = useState<QueryHistory[]>([]);

  const addToHistory = (query: string, result: string, type: "SQL" | "DDL" | "COMMAND") => {
    setHistory((prev) => [
      {
        id: Date.now(),
        query,
        result,
        timestamp: new Date(),
        type,
      },
      ...prev,
    ]);
  };

  const handleExecute = async () => {
    try {
      setError("");
      setIsLoading(true);
      const response = await invoke<string>("execute", { query });
      setResult(response);
      addToHistory(query, response, "SQL");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setResult("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExecuteDDL = async () => {
    try {
      setError("");
      setIsLoadingDDL(true);
      const response = await invoke<string>("executeDDL", { query });
      setResult(response);
      addToHistory(query, response, "DDL");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setResult("");
    } finally {
      setIsLoadingDDL(false);
    }
  };

  const handleExecuteCommand = async () => {
    try {
      setError("");
      setIsLoadingCommand(true);
      const response = await invoke<string>("executeCommand", { command: query });
      setResult(response);
      addToHistory(query, response, "COMMAND");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setResult("");
    } finally {
      setIsLoadingCommand(false);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(date);
  };

  const getButtonColor = (type: "SQL" | "DDL" | "COMMAND") => {
    switch (type) {
      case "SQL":
        return "#0052CC";
      case "DDL":
        return "#36B37E";
      case "COMMAND":
        return "#FF5630";
      default:
        return "#0052CC";
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>SQL Query Executor</h1>

      <div style={{ marginBottom: "20px" }}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your SQL query here..."
          style={{
            width: "100%",
            minHeight: "150px",
            padding: "10px",
            marginBottom: "10px",
            fontFamily: "monospace",
            fontSize: "14px",
          }}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleExecute}
            disabled={isLoading || isLoadingDDL || isLoadingCommand}
            style={{
              padding: "10px 20px",
              backgroundColor: isLoading ? "#0052CC80" : "#0052CC",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: isLoading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {isLoading ? (
              <>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid #ffffff",
                    borderTop: "2px solid transparent",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
                Executing...
              </>
            ) : (
              "Execute Query"
            )}
          </button>
          <button
            onClick={handleExecuteDDL}
            disabled={isLoading || isLoadingDDL || isLoadingCommand}
            style={{
              padding: "10px 20px",
              backgroundColor: isLoadingDDL ? "#36B37E80" : "#36B37E",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: isLoadingDDL ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {isLoadingDDL ? (
              <>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid #ffffff",
                    borderTop: "2px solid transparent",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
                Executing...
              </>
            ) : (
              "Execute DDL"
            )}
          </button>
          <button
            onClick={handleExecuteCommand}
            disabled={isLoading || isLoadingDDL || isLoadingCommand}
            style={{
              padding: "10px 20px",
              backgroundColor: isLoadingCommand ? "#FF563080" : "#FF5630",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: isLoadingCommand ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {isLoadingCommand ? (
              <>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid #ffffff",
                    borderTop: "2px solid transparent",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
                Executing...
              </>
            ) : (
              "Execute Command"
            )}
          </button>
        </div>
      </div>

      {error && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#FFEBE6",
            border: "1px solid #DE350B",
            borderRadius: "3px",
            marginBottom: "20px",
            color: "#DE350B",
          }}
        >
          {error}
        </div>
      )}

      {result && (
        <div>
          <h3>Result:</h3>
          <pre
            style={{
              backgroundColor: "#F4F5F7",
              padding: "15px",
              borderRadius: "3px",
              overflow: "auto",
              maxHeight: "400px",
            }}
          >
            {result}
          </pre>
        </div>
      )}

      {history.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h2>Query History</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {history.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #DFE1E6",
                  borderRadius: "3px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: getButtonColor(item.type),
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{item.type} Query</span>
                  <span>{formatDate(item.timestamp)}</span>
                </div>
                <div style={{ padding: "15px" }}>
                  <div style={{ marginBottom: "10px" }}>
                    <h4 style={{ margin: "0 0 5px 0" }}>Query:</h4>
                    <pre
                      style={{
                        backgroundColor: "#F4F5F7",
                        padding: "10px",
                        borderRadius: "3px",
                        margin: 0,
                        overflow: "auto",
                        maxHeight: "200px",
                      }}
                    >
                      {item.query}
                    </pre>
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 5px 0" }}>Result:</h4>
                    <pre
                      style={{
                        backgroundColor: "#F4F5F7",
                        padding: "10px",
                        borderRadius: "3px",
                        margin: 0,
                        overflow: "auto",
                        maxHeight: "200px",
                      }}
                    >
                      {item.result}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default App;
