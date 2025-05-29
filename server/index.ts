// import { createHTTPServer } from "@trpc/server/adapters/standalone";
import http from "http";
import { createOpenApiHttpHandler } from "trpc-openapi";
import { appRouter } from "./routers";
import { createContext } from "./context";

// const server = createHTTPServer({
//   router: appRouter,
//   createContext
// });

 const server = http.createServer(
   createOpenApiHttpHandler({ router: appRouter, createContext })
 );

server.listen(8000);
