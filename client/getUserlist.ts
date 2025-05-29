import { trpc } from "./client";

async function main() {
  const users = await trpc.user.userList.query();
  console.log("Users:", users);
}

main().catch(console.error);