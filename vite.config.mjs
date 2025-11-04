import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig(() => {
  return {
    ssr: {
      external: ["@forge/sql"],
      optimizeDeps: true,
      emitAssets: false,
    },
    build: {
      outDir:  "dist",
      lib: {
        entry: { ForgeSQLORM: path.resolve("src/index.ts") },
        formats: ["cjs", "es"],
      },
      ssr: true,
      sourcemap: true,
      target: "node22",
      rollupOptions: {
        external: ["@forge/sql"],
        output: {
          esModule: true,
          externalImportAttributes: true,
          exports: "named",
        },
      },
    },
  };
});
