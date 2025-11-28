import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {

    globals: true,
    mockReset: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ["src"],
      reportsDirectory: './coverage',
        thresholds: {
            statements: 80,
            branches: 75,
            functions: 80,
            lines: 80,
        },
    },
    include: ['src/**/*.test.ts', '__tests__/**/*.test.ts'],
  },
});
