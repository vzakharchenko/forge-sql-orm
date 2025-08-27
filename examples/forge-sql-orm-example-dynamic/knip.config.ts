import type { KnipConfig } from "knip";
import { defaultConfig } from "../../knip.config";
const config: KnipConfig = {
  ...defaultConfig,
  rules: { ...defaultConfig.rules, unresolved: "off" },
  project: ["src/**/*.ts"],
};

export default config;
