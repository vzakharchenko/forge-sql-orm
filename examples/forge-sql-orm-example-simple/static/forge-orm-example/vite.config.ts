import { ConfigEnv, defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";
import { resolve } from "path";

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
    plugins: [react()],
    server: {
      port: 3099,
    },
    build: {
      outDir: buildPath,
      emptyOutDir: true,
    },
  };
});
