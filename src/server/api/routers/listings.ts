import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const listingsRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.listing.findMany({ orderBy: { make: "asc" } });
  }),
});