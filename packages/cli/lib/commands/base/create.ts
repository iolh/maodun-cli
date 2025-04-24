import type { Command } from "commander";
import prompts from "prompts";

import { loadRemoteTemplate, loadTemplate } from "../utils/loadTemplate";

type CreateCommandOptions = {
    framework?: string;
    template?: string;
    remote?: string;
};

export const create = (program: Command) =>
    program
        .createCommand("create")
        .description("create command")
        .arguments("<projectName>")
        .option("-f, --framework <framework>", "选择框架")
        .option("-t, --template <template>", "选择模板")
        .option("-r, --remote <remote>", "远程模板")
        .action(async (projectName: string, options: CreateCommandOptions) => {
            console.log(options);
            const { remote } = options;
            let { framework, template } = options;

            if (remote) {
                console.log(`clone ${remote}...`);
                loadRemoteTemplate({ projectName });
                return;
            }

            if (!framework) {
                const res = await prompts({
                    type: "select",
                    name: "framework",
                    message: "选择框架",
                    choices: [
                        {
                            title: "react",
                            value: "react",
                        },
                        {
                            title: "vue",
                            value: "vue",
                        },
                        {
                            title: "react-native",
                            value: "react-native",
                        },
                    ],
                });

                framework = res.framework;
            }

            if (!template) {
                const res = await prompts({
                    type: "select",
                    name: "template",
                    message: "选择模板",
                    choices: [
                        { title: "Vue", value: "vue" },
                        { title: "React", value: "react" },
                        { title: "Vanilla", value: "vanilla" },
                    ],
                });

                template = res.template;
            }

            if (!template || !framework) {
                console.log("请选择框架和模板");
                process.exit(1);
            }

            await loadTemplate({ remote, projectName, template });
        });
