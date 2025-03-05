#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

// Get all command-line arguments except the first two (node and script path)
const args = process.argv.slice(2).join(" ");

// Resolve the path to cli.ts
const cliPath = path.resolve(__dirname, "cli.js");

// Determine the path to the local ts-node in node_modules/.bin
let localTsNode = path.resolve(__dirname, "../node_modules/.bin/ts-node");

// On Windows, the ts-node binary is named ts-node.cmd
if (os.platform() === "win32") {
    localTsNode += ".cmd";
}

// Function to execute a shell command
const runCommand = (cmd) => {
    try {
        // Execute the command with inherited stdio for proper CLI output
        execSync(cmd, { stdio: "inherit", shell: true });
        process.exit(0); // Exit successfully after execution
    } catch (e) {
        console.error("⚠️  Command execution failed:", e.message);
        process.exit(1); // Exit with an error code
    }
};

// If local ts-node exists, use it
if (fs.existsSync(localTsNode)) {
    runCommand(`"${localTsNode}" ${cliPath} ${args}`);
} else {
    console.warn("⚠️  Local ts-node not found, trying npx ts-node...");
    runCommand(`npx ts-node ${cliPath} ${args}`);
}
