#!/usr/bin/env node
import {execSync} from  'child_process'
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Get CLI arguments (excluding "node" and script path)
const args = process.argv.slice(2).join(" ");

// Resolve the path to cli.ts (your TypeScript entry file)
const cliPath = path.resolve(__dirname, "cli.mjs");

try {
    execSync(`npx  --yes tsm --no-warnings ${cliPath} ${args}`, { stdio: "inherit" });
    process.exit(0);
} catch (e:any) {
    console.error("⚠️  Command execution failed:", e.message);
    process.exit(1);
}