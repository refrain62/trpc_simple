import { trpc } from "./client";

async function main() {
  const createdUser = await trpc.user.userCreate.mutate({
    name: "taro",
    townName: "tokyo",
  });
  console.log("Created user:", createdUser);
}

main().catch(console.error);
