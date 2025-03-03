import { describe, it, expect } from "vitest";
import knex from "../../../src/knex";

// Test suite for knex
describe("knex", () => {
    it("simple test", () => {
        expect(knex.sql).toBeDefined();
    });
});
