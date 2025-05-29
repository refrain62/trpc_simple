import { userRouter } from "./user";
import { router, merge } from "../trpc";
import { authRouter } from "./auth";

export const appRouter = router({
  user: merge(userRouter, authRouter),
});

export type AppRouter = typeof appRouter;
