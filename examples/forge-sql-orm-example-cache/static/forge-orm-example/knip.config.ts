import type { KnipConfig } from "knip";
import { defaultConfig } from "../../../../knip.config";
const config: KnipConfig = {
  ...defaultConfig,
  project: ["src/*.{ts,tsx}"],
  ignoreDependencies: ["prettier-plugin-pkg", "@atlaskit/dynamic-table"],
};

export default config;
