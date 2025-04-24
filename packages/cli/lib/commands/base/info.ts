import type { Command } from "commander";
import pico from "picocolors";

import pkg from "../../../package.json";
import { logger } from "../utils/logger";

export const info = (program: Command) =>
    program
        .createCommand("info")
        .description("Display info about the maodun CLI")
        .action(() => {
            logger.log(pico.bgGreen(`Product: maodun CLI v${pkg.version}`));
            logger.log(pico.green(`Author: ${pkg.author}`));
            logger.log(pico.underline("Website: https://github.com/alexeyraspopov/picocolors"));
        });
