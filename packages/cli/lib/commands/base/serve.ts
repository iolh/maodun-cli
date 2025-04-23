import type { Command } from "commander";

export const serve = (program: Command) =>
    program
        .createCommand("serve")
        .description("serve command")
        .action(() => {
            console.log("serve");
        });
