import { setToken, trpc } from "./authClient";

async function main() {
  setToken("bad");
  const hello = await trpc.user.hello.query({
    name: "jiro",
    townName: "osaka",
  });
  console.log("hello:", hello);
}

main().catch(console.error);
