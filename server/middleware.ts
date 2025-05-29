import { TRPCError } from "@trpc/server";
import { middleware, publicProcedure } from "./trpc";

const isAuth = middleware(async (opts) => {
  const { ctx } = opts;
  if (!ctx.isAuth) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      isAuth: ctx.isAuth,
    },
  });
});

export const authorizedProcedure = publicProcedure.use(isAuth);
