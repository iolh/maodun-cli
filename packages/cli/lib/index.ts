// ============= v1 =============
// const commands: Map<string, () => void> = new Map();
// export const registerCommand = (command: string, action: () => void) => {
//     commands.set(command, action);
// };
// registerCommand("init", init);
// registerCommand("deploy", deploy);
// export function runCLI() {
//     const command = process.argv[2];
//     const action = commands.get(command);
//     if (action) {
//         action();
//     } else {
//         console.log("command not found");
//     }
// }
// ============= v2 =============
import "./commands";

import { program } from "./registerCommand";

export function runCLI() {
    program.parse();
}
