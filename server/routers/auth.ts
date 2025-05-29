import { router } from "../trpc";
import { authorizedProcedure } from "../middleware";
import { z } from "zod";

export const authRouter = router({
  hello: authorizedProcedure
  .meta({ openapi: { method: "GET", path: "/auth" } })
    .input(
      z.object({
        name: z.string().describe("The name to say hello too."),
        townName: z.string(),
      })
      // (value): { name: string; townName: string } => {
      //   if (
      //     typeof value === "object" &&
      //     value !== null &&
      //     "name" in value &&
      //     "townName" in value &&
      //     typeof value.name === "string" &&
      //     typeof value.townName === "string"
      //   ) {
      //     return value as { name: string; townName: string };
      //   }
      //   throw new Error("Input is not a valid value");
      // }
    )
    .output(
      z.object({
        greeting: z.string(),
      })
      // (value): { greeting: string } => {
      //   if (
      //     typeof value === "object" &&
      //     value !== null &&
      //     "greeting" in value &&
      //     typeof value.greeting === "string"
      //   ) {
      //     return value as { greeting: string };
      //   }
      //   throw new Error("Output is not a valid value");
      // }
    )
    .query((opts) => {
      const { input } = opts;
      return {
        greeting: `Welcome ${input.name}`,
      };
    }),
});
