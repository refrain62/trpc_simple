import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./routers";

const server = createHTTPServer({
  router: appRouter,
});

server.listen(8000);
