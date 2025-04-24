import { execSync } from "node:child_process";

export function getPnpmVersion() {
    let _pnpmVersion;
    try {
        _pnpmVersion = execSync("pnpm --version", {
            stdio: ["pipe", "pipe", "ignore"],
        }).toString();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e: unknown) {
        _pnpmVersion = undefined;
    }
    return _pnpmVersion;
}

export function hasPnpm() {
    return !!getPnpmVersion();
}
