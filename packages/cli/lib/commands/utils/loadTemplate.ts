import path from "node:path";

import { copy, readJson, writeJson } from "fs-extra/esm";
import { downloadTemplate } from "giget";
import ora from "ora";

export const generatePackageJson = async (projectName: string) => {
    const pkgPath = path.join(process.cwd(), projectName, "package.json");

    const originJson = await readJson(pkgPath);

    await writeJson(
        pkgPath,
        { ...originJson, name: projectName },
        {
            spaces: 4,
        },
    );
};

export const loadLocalTemplate = async (options: LoadLocalTemplateOptions) => {
    console.log(options);
    const spinner = ora({
        text: "loading template",
        color: "yellow",
    }).start();

    const templatePath = path.join(import.meta.dirname, "../templates", `template-${options.template}`);
    const projectPath = path.join(process.cwd(), options.projectName);

    // if (isExists) {
    // spinner.fail();
    // console.log("project already exists");
    // return;
    // }

    await copy(templatePath, projectPath);

    generatePackageJson(options.projectName);

    spinner.text = "template loaded";
    spinner.succeed();
};

export const loadRemoteTemplate = async (options: LoadRemoteTemplateOptions) => {
    const res = await downloadTemplate("https://codeload.github.com/design-sparx/antd-multipurpose-dashboard/tar.gz/refs/heads/main", {
        dir: path.join(process.cwd(), options.projectName),
    });

    console.log(res);
};

export const loadTemplate = async ({ remote, template, projectName }: LoadTemplateOptions) => {
    if (remote) {
        await loadRemoteTemplate({ projectName });
        return;
    }

    await loadLocalTemplate({ projectName, template });
};

export type LoadLocalTemplateOptions = {
    projectName: string;
    template: string;
};

export type LoadRemoteTemplateOptions = {
    projectName: string;
};

export type LoadTemplateOptions = {
    remote?: string;
} & LoadLocalTemplateOptions &
    LoadRemoteTemplateOptions;
