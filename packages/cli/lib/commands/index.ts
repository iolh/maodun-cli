import { registerCommand } from "../registerCommand";
import { build } from "./base/build";
import { create } from "./base/create";
import { info } from "./base/info";
import { preview } from "./base/preview";
import { serve } from "./base/serve";

// 注册命令
registerCommand(info);
registerCommand(create);
registerCommand(serve);
registerCommand(build);
registerCommand(preview);
