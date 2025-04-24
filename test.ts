// import { Command } from "commander";

// const program = new Command();

// commander 使用 demo1
// program
//   .option('--first') // 带参数的选项
//   .option('-s, --separator <char>') // 带参数的选项
//   .arguments('<string...>');

// program.parse();

// console.log(program.args);
// console.log(program.opts());
// console.log(process.argv);

// program.args
// program.opts()

// commander 使用 demo2
// program
//   .name('string-util')
//   .description('CLI to some JavaScript string utilities')
//   .version('0.8.0');

// program.command('split')
//   .description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// program.parse();

// import { createConsola } from "consola";
// import pc from "picocolors";

// export const consola = createConsola();
// consola.info("Using consola 3.0.0");
// consola.start("Building project...");
// consola.warn("A new version of consola is available: 3.0.1");
// consola.success("Project built!");
// consola.error(new Error("This is an example error. Everything is fine!"));
// consola.box("I am a simple box");
// (async () => {
//     const res = await consola.prompt("Deploy to the production?", {
//         type: "confirm",
//     });

//     consola.log(res);
// })();

// pc 使用
// console.log(
//   pc.green(pc.italic("简单测试一下"))
// )
// consola.info(
//   pc.blue(pc.italic("简单测试一下1"))
// )
// consola.box(
//   pc.blue(pc.italic("简单测试一下2"))
// )

// async function main() {
//     const name = await consola.prompt("What is your name?", {
//         placeholder: "Not sure",
//         initial: "java",
//     });
//     console.log(name);

//     const confirmed = await consola.prompt("Do you want to continue?", {
//         type: "confirm",
//     });
//     console.log(confirmed);

//     const projectType = await consola.prompt("Pick a project type.", {
//         type: "select",
//         options: ["JavaScript", "TypeScript", { label: "CoffeeScript", value: "CoffeeScript", hint: "oh no" }],
//         initial: "TypeScript",
//     });
//     console.log(projectType);

//     const tools = await consola.prompt("Select additional tools.", {
//         type: "multiselect",
//         required: false,
//         options: [
//             { value: "eslint", label: "ESLint", hint: "recommended" },
//             { value: "prettier", label: "Prettier" },
//             { value: "gh-action", label: "GitHub Action" },
//         ],
//         initial: ["eslint", "prettier"],
//     });
//     console.log(tools);

//     consola.start("Creating project...");
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     consola.success("Project created!");
// }

// main();

// prompts 使用
// import prompts from "prompts";

// (async () => {
//     const response = await prompts({
//         type: "number",
//         name: "value",
//         message: "How old are you?",
//         validate: value => (value < 18 ? `Nightclub is 18+ only` : true),
//     });

//     console.log(response); // => { value: 24 }
// })();

// const questions = [
//     {
//         type: "text" as const,
//         name: "username",
//         message: "What is your GitHub username?",
//     },
//     {
//         type: "number" as const,
//         name: "age",
//         message: "How old are you?",
//     },
//     {
//         type: "text" as const,
//         name: "about",
//         message: "Tell something about yourself",
//         initial: "Why should I?",
//     },
// ];

// (async () => {
//     const response = await prompts(questions);

//     console.log(response);

//     // => response => { username, age, about }
// })();
