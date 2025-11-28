import { describe, it, expect, beforeEach, vi } from "vitest";
import { topSlowestStatementLastHourTrigger } from "../../../src/webtriggers/topSlowestStatementLastHourTrigger";
import { ForgeSqlOperation } from "../../../src/core/ForgeSQLQueryBuilder";
import { TriggerResponse } from "../../../src/webtriggers/index";

// Mock dependencies
const mockSlowQuerySchedulerTrigger = vi.fn();

vi.mock("../../../src/webtriggers/index", async () => {
  const actual = await vi.importActual("../../../src/webtriggers/index");
  return {
    ...actual,
    slowQuerySchedulerTrigger: (...args: any[]) => mockSlowQuerySchedulerTrigger(...args),
  };
});

describe("topSlowestStatementLastHourTrigger", () => {
  let mockOrm: ForgeSqlOperation;

  beforeEach(() => {
    vi.clearAllMocks();
    mockOrm = {} as ForgeSqlOperation;
    mockSlowQuerySchedulerTrigger.mockResolvedValue({
      statusCode: 200,
      body: "Success",
      headers: { "Content-Type": ["application/json"] },
      statusText: "Ok",
    });
  });

  it("should call slowQuerySchedulerTrigger with default options when no options provided", async () => {
    const result = await topSlowestStatementLastHourTrigger(mockOrm);

    expect(mockSlowQuerySchedulerTrigger).toHaveBeenCalledTimes(1);
    expect(mockSlowQuerySchedulerTrigger).toHaveBeenCalledWith(mockOrm, {
      timeout: 3000,
      hours: 1,
    });
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe("Success");
  });

  it("should call slowQuerySchedulerTrigger with custom hours when provided", async () => {
    const result = await topSlowestStatementLastHourTrigger(mockOrm, { hours: 6 });

    expect(mockSlowQuerySchedulerTrigger).toHaveBeenCalledWith(mockOrm, {
      timeout: 3000,
      hours: 6,
    });
    expect(result.statusCode).toBe(200);
  });

  it("should call slowQuerySchedulerTrigger with default hours when options provided but hours is undefined", async () => {
    const result = await topSlowestStatementLastHourTrigger(mockOrm, {
      warnThresholdMs: 500,
    });

    expect(mockSlowQuerySchedulerTrigger).toHaveBeenCalledWith(mockOrm, {
      timeout: 3000,
      hours: 1,
    });
    expect(result.statusCode).toBe(200);
  });

  it("should call slowQuerySchedulerTrigger with hours set to null converted to default", async () => {
    const result = await topSlowestStatementLastHourTrigger(mockOrm, { hours: null as any });

    expect(mockSlowQuerySchedulerTrigger).toHaveBeenCalledWith(mockOrm, {
      timeout: 3000,
      hours: 1,
    });
    expect(result.statusCode).toBe(200);
  });

  it("should call slowQuerySchedulerTrigger with hours set to 0", async () => {
    const result = await topSlowestStatementLastHourTrigger(mockOrm, { hours: 0 });

    expect(mockSlowQuerySchedulerTrigger).toHaveBeenCalledWith(mockOrm, {
      timeout: 3000,
      hours: 0,
    });
    expect(result.statusCode).toBe(200);
  });

  it("should call slowQuerySchedulerTrigger with hours set to 24", async () => {
    const result = await topSlowestStatementLastHourTrigger(mockOrm, { hours: 24 });

    expect(mockSlowQuerySchedulerTrigger).toHaveBeenCalledWith(mockOrm, {
      timeout: 3000,
      hours: 24,
    });
    expect(result.statusCode).toBe(200);
  });

  it("should ignore other options and only pass hours", async () => {
    const result = await topSlowestStatementLastHourTrigger(mockOrm, {
      hours: 2,
      warnThresholdMs: 500,
      memoryThresholdBytes: 1024,
      showPlan: true,
      operationType: "DDL",
      topN: 5,
      tables: "CLUSTER_SUMMARY_AND_HISTORY",
    });

    expect(mockSlowQuerySchedulerTrigger).toHaveBeenCalledWith(mockOrm, {
      timeout: 3000,
      hours: 2,
    });
    expect(result.statusCode).toBe(200);
  });

  it("should return error response when slowQuerySchedulerTrigger fails", async () => {
    const errorResponse: TriggerResponse<string> = {
      statusCode: 500,
      body: "Error occurred",
      headers: { "Content-Type": ["application/json"] },
      statusText: "Internal Server Error",
    };
    mockSlowQuerySchedulerTrigger.mockResolvedValue(errorResponse);

    const result = await topSlowestStatementLastHourTrigger(mockOrm);

    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Error occurred");
    expect(result.statusText).toBe("Internal Server Error");
  });

  it("should propagate the response from slowQuerySchedulerTrigger", async () => {
    const customResponse: TriggerResponse<string> = {
      statusCode: 200,
      body: "Custom response body",
      headers: { "Content-Type": ["application/json"], "X-Custom": ["value"] },
      statusText: "Custom Status",
    };
    mockSlowQuerySchedulerTrigger.mockResolvedValue(customResponse);

    const result = await topSlowestStatementLastHourTrigger(mockOrm);

    expect(result).toEqual(customResponse);
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe("Custom response body");
    expect(result.headers).toEqual({
      "Content-Type": ["application/json"],
      "X-Custom": ["value"],
    });
    expect(result.statusText).toBe("Custom Status");
  });

  it("should handle empty options object", async () => {
    const result = await topSlowestStatementLastHourTrigger(mockOrm, {});

    expect(mockSlowQuerySchedulerTrigger).toHaveBeenCalledWith(mockOrm, {
      timeout: 3000,
      hours: 1,
    });
    expect(result.statusCode).toBe(200);
  });
});
