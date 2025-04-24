import { spawn } from "node:child_process";

import type { Command } from "commander";

import { hasPnpm } from "../utils/env";

export const build = (program: Command) =>
    program
        .createCommand("build")
        .description("build command")
        .action(() => {
            const _hasPnpm = hasPnpm();
            const command = _hasPnpm ? "pnpm" : "npm";
            const params = _hasPnpm ? ["build"] : ["run", "build"];
            console.log("build");

            const child = spawn(command, params, {
                cwd: process.cwd(),
                stdio: "inherit",
            });

            child.on("close", code => {
                console.log(`child process exited with code ${code}`);
                process.exit(code);
            });
        });
