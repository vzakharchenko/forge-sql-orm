import type { KnipConfig } from "knip";

export const defaultConfig: KnipConfig = {
    rules: {
        dependencies: "error",
        devDependencies: "error",
        optionalPeerDependencies: "error",
        exports: "off",
        files: "off",
        binaries: "off",
        unresolved: "error",
        unlisted: "error",
        types: "off",
        nsExports: "error",
        nsTypes: "error",
        duplicates: "error",
        enumMembers: "error",
        classMembers: "error",
    },
};

const config: KnipConfig = { ...defaultConfig, project: ["src/**/*.ts"] , ignoreDependencies:["uuid"]};
export default config;
