import type { Command } from "commander";

export const info = (program: Command) =>
    program
        .createCommand("info")
        .description("info command")
        .action(() => {
            console.log("info");
        });
