#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

// Get CLI arguments (excluding "node" and script path)
const args = process.argv.slice(2).join(" ");

// Resolve the path to cli.ts (your TypeScript entry file)
const cliPath = path.resolve(__dirname, "cli.js");

// Function to run a command
const runCommand = (cmd) => {
  try {
    execSync(cmd, { stdio: "inherit", shell: true });
    process.exit(0);
  } catch (e) {
    console.error("⚠️  Command execution failed:", e.message);
    process.exit(1);
  }
};

runCommand(`npx  --yes tsm --no-warnings ${cliPath} ${args}`);
