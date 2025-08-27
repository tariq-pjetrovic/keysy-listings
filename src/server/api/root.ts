import { createTRPCRouter } from "@/server/api/trpc";
import { listingsRouter } from "@/server/api/routers/listings";

export const appRouter = createTRPCRouter({
  listings: listingsRouter,
});

export type AppRouter = typeof appRouter;
