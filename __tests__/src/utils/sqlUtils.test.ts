import { describe, it, expect } from "vitest";
import moment from "moment";
import {parseDateTime, transformValue} from "../../../src/utils/sqlUtils";

// Test suite for transformValue function
describe("transformValue", () => {
    it("should wrap text and string values in single quotes", () => {
        expect(transformValue({ type: "text", value: "hello" })).toBe("'hello'");
        expect(transformValue({ type: "string", value: "world" })).toBe("'world'");
    });

    it("should format datetime values correctly", () => {
        const date = new Date("2024-03-03T12:34:56.789Z");
        const formatted = moment(date).format("YYYY-MM-DDTHH:mm:ss.SSS");
        expect(transformValue({ type: "datetime", value: date })).toBe(`'${formatted}'`);
    });

    it("should format date values correctly", () => {
        const date = new Date("2024-03-03");
        const formatted = moment(date).format("YYYY-MM-DD");
        expect(transformValue({ type: "date", value: date })).toBe(`'${formatted}'`);
    });

    it("should format time values correctly", () => {
        const date = new Date("2024-03-03T12:34:56.789Z");
        const formatted = moment(date).format("HH:mm:ss.SSS");
        expect(transformValue({ type: "time", value: date })).toBe(`'${formatted}'`);
    });

    it("should return the value as-is for unknown types", () => {
        expect(transformValue({ type: "unknown", value: 123 })).toBe(123);
        expect(transformValue({ type: "unknown", value: true })).toBe(true);
    });
});

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
});
