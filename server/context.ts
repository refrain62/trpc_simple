import { inferAsyncReturnType } from "@trpc/server";
import type { CreateHTTPContextOptions } from "@trpc/server/adapters/standalone";

export async function createContext(opts: CreateHTTPContextOptions) {
  const isAuth = opts.req.headers.authorization === "Good";

  return { isAuth };
}

export type Context = inferAsyncReturnType<typeof createContext>;
