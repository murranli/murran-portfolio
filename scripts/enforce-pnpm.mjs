const userAgent = process.env.npm_config_user_agent ?? "";
const execPath = process.env.npm_execpath ?? "";

const isPnpm = userAgent.startsWith("pnpm/") || execPath.includes("pnpm");

if (!isPnpm) {
  console.error(
    [
      "This project uses pnpm only.",
      "Use `corepack pnpm install` or `pnpm install`.",
      "Do not use npm, yarn, bun, package-lock.json, yarn.lock, or bun.lockb."
    ].join("\n")
  );
  process.exit(1);
}
