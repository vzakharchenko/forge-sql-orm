import {defineConfig} from "vite";
import path from "node:path";

export default defineConfig({
    ssr: {
        external:  ['@forge/sql'],
        optimizeDeps: true,
        emitAssets: false,
    },
    build: {
        lib: {
            entry: path.resolve("src/index.ts"),
            name: "ForgeSQLORM",
            formats: ["cjs", "es"],
            fileName: (format) => `forge-sql-orm.${format}.js`,
        },
        ssr: true,
        sourcemap: true,
        target: "node18",
        rollupOptions: {
            external: ['@forge/sql'],
            output: {
                esModule: true,
                externalImportAttributes: true,
                exports: "named",
            }
        },
    },
});
