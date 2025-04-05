import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    mockReset: true,
    include: ['__tests__/**/*.test.ts'],
    coverage: {
      include: ["src"],
    },
  },
});
