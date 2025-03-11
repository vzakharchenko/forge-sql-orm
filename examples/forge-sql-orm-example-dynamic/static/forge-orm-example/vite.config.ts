import { ConfigEnv, defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";

const manualChunks = (id:string) => {
  if (id.includes("node_modules")) {
    if (id.includes("client-core/src")) {
      return "client-core-vendor";
    }
    if (id.includes("lodash")) {
      return "lodash-vendor";
    }
    if (id.includes("antlr4")) {
      return "antlr4-vendor";
    }
    if (id.includes("react-dom")) {
      return "react-dom-vendor";
    }
    if (id.includes("rxjs") || id.includes("prosemirror")) {
      return "vendor";
    }
  }
};

export default defineConfig(async (env: ConfigEnv): Promise<UserConfig> => {
  const envPath = "./.env";

  const envVars = config({ path: envPath }).parsed || {};
  const envKeys = Object.keys(envVars).reduce((acc, key) => {
    // @ts-ignore
    acc[`process.env.${key}`] = JSON.stringify(envVars[key]);
    return acc;
  }, {});
  const buildPath = resolve(__dirname, envVars["BUILD_PATH"] || "./build");
  return {
    define: envKeys,
    base: "./",
    plugins: [react(),
      visualizer({
        open: false,
        filename: `dependency-chunks.html`,
      }),],
    server: {
      port: 3099,
    },
    build: {
      outDir: buildPath,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks
        }
        },
    },
  };
});
