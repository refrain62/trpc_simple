import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/routers";

let token: string;
export function setToken(newToken: string) {
  token = newToken;
}

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8000",
      headers() {
        return {
          Authorization: token,
        };
      },
    }),
  ],
});
