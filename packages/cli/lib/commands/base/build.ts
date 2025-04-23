import type { Command } from "commander";

export const build = (program: Command) =>
    program
        .createCommand("build")
        .description("build command")
        .action(() => {
            console.log("build");
        });
