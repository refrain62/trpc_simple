import { trpc } from "./client";

async function main() {
  const user = await trpc.user.userById.query("1");
  console.log("User 1:", user);
}

main().catch(console.error);
