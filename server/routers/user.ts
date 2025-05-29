import { db } from "../db";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),

  userById: publicProcedure
    .input(
      z.string()
      // (value): string => {
      //   if (typeof value === "string") {
      //     return value;
      //   }
      //   throw new Error("Input is not a string");
      // }
    )
    .query(async (opts) => {
      const { input } = opts;
      const user = await db.user.findById(input);
      return user;
    }),

  userCreate: publicProcedure
    .input(
      z.object({ name: z.string(), townName: z.string()})
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

    .mutation(async (opts) => {
      const { input } = opts;
      const user = await db.user.create(input);
      return user;
    }),
});
