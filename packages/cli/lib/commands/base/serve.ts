import { spawn } from "node:child_process";

import type { Command } from "commander";

import { hasPnpm } from "../utils/env";

export const serve = (program: Command) =>
    program
        .createCommand("serve")
        .description("serve command")
        .action(() => {
            const _hasPnpm = hasPnpm();
            const command = _hasPnpm ? "pnpm" : "npm";
            const params = _hasPnpm ? ["dev"] : ["run", "dev"];
            console.log("serve");

            const child = spawn(command, params, {
                cwd: process.cwd(),
                stdio: "inherit",
            });

            child.on("close", code => {
                console.log(`child process exited with code ${code}`);
                process.exit(code);
            });
        });
