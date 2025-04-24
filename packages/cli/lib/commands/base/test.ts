import type { Command } from "commander";

export const test = (program: Command) =>
    program
        .createCommand("test")
        .arguments("<repo>")
        .description("测试命令")
        .option("-D, --save-dev", "Save as dev dependency") // 不带值的选项
        .option("-p, --port <number>", "Specify port number") // 带值的选项
        .action(repo => {
            console.log(`Cloning ${repo}...`);
        });
