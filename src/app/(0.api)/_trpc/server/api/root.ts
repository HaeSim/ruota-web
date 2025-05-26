import { bannerRouter } from "./routers/banner.router"
import { googleCalendarRouter } from "./routers/googleCalendar.router"
import { createCallerFactory, createTRPCRouter } from "./trpc"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  googleCalendar: googleCalendarRouter,
  banner: bannerRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter)
