import type { Command } from "commander";

export const preview = (program: Command) =>
    program
        .createCommand("preview")
        .description("preview command")
        .action(() => {
            console.log("preview");
        });
