import { setToken, trpc } from "./authClient";

async function main() {
  setToken("Good");
  const hello = await trpc.user.hello.query({
    name: "taro",
    townName: "tokyo",
  });
  console.log("hello:", hello);
}

main().catch(console.error);
