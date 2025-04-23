import type { Command } from "commander";

export const create = (program: Command) =>
    program
        .createCommand("create")
        .description("create command")
        .action(() => {
            console.log("create");
        });
