import { describe, it, expect } from "vitest";
import moment from "moment";
import { parseDateTime } from "../../../src/utils/sqlUtils";

// Test suite for transformValue function
describe("transformValue", () => {

// Test suite for parseDateTime function
describe("parseDateTime", () => {
  it("should correctly parse a datetime string", () => {
    const dateString = "2024-03-03T12:34:56.789";
    const format = "YYYY-MM-DDTHH:mm:ss.SSS";
    const parsedDate = parseDateTime(dateString, format);
    expect(moment(parsedDate).format(format)).toBe(dateString);
  });

  it("should correctly parse a date string", () => {
    const dateString = "2024-03-03";
    const format = "YYYY-MM-DD";
    const parsedDate = parseDateTime(dateString, format);
    expect(moment(parsedDate).format(format)).toBe(dateString);
  });
})
});
