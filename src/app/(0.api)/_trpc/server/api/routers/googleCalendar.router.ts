import { z } from "zod"

import { getGoogleCalendarEventsByMonth } from "../services/googleCalendar.service"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const googleCalendarRouter = createTRPCRouter({
  getGoogleCalendarEventsByMonth: protectedProcedure
    .input(
      z.object({
        month: z.number(),
        year: z.number(),
      })
    )
    .query(async ({ input }) => {
      const events = await getGoogleCalendarEventsByMonth({
        month: input.month,
        year: input.year,
      })
      return events
    }),
})
