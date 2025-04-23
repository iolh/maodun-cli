import { Command } from "commander";

export const program = new Command();

export const registerCommand = (commandPlugin: (program: Command) => Command) => {
    program.addCommand(commandPlugin(program));
};
