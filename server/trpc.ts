import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import { OpenApiMeta } from "trpc-openapi";

const t = initTRPC.context<Context>().meta<OpenApiMeta>().create();
export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;
export const merge = t.mergeRouters;
