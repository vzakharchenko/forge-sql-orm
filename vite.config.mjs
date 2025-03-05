import { defineConfig } from "vite";
import path from "node:path";
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig(({ mode }) => {
    const isCLI = mode === "cli";
    return {
        ssr: {
            external: ["@forge/sql"],
            optimizeDeps: true,
            emitAssets: false,
        },
        build: {
            outDir: isCLI ? "dist-cli" : "dist",
            lib: {
                entry: isCLI
                    ? { cli: path.resolve("scripts/cli.ts") }
                    : { ForgeSQLORM: path.resolve("src/index.ts") },
                formats: ["cjs", "es"],
            },
            ssr: true,
            sourcemap: true,
            target: "node18",
            rollupOptions: {
                external: ["@forge/sql"],
                output: {
                    esModule: true,
                    externalImportAttributes: true,
                    exports: "named",
                },
            },
        },
        plugins: [
            isCLI &&
            viteStaticCopy({
                targets: [
                    {
                        src: "scripts/forgeSqlCLI.js",
                        dest: ".",
                    },
                    {
                        src: "scripts/tsm",
                        dest: ".",
                    }
                ],
            }),
        ].filter(Boolean),
    };
});
