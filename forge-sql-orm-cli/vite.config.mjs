import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig(({ mode }) => {

  return {
    ssr: {
      optimizeDeps: true,
      emitAssets: false,
    },
    build: {
      outDir: "dist-cli",
      lib: {
        entry: {
          cli: path.resolve("src/cli.ts"),
          forgeSqlOrmCLI: path.resolve("src/forgeSqlOrmCLI.mts")
        },
        formats: ["cjs", "es"],
      },
      ssr: true,
      sourcemap: true,
      target: "node18",
      rollupOptions: {
        output: {
          esModule: true,
          externalImportAttributes: true,
          exports: "named",
        },
      },
    },
  };
});
