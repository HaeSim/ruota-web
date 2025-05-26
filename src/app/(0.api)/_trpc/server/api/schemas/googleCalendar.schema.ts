import { z } from "zod"

const googleCalendarEventSchema = z.object({
  kind: z.string().optional(), // Event type (e.g., "calendar#event")
  etag: z.string().optional(), // ETag for the resource
  id: z.string().optional(), // Event ID
  status: z.enum(["confirmed", "tentative", "cancelled"]).optional(), // Event status
  htmlLink: z.string().url().optional(), // Link to the event
  created: z.string().datetime().optional(), // Creation time
  updated: z.string().datetime().optional(), // Last modification time
  summary: z.string().optional(), // Title of the event
  description: z.string().optional(), // Description of the event
  location: z.string().optional(), // Geographic location of the event
  colorId: z.string().optional(), // Color ID
  creator: z
    .object({
      id: z.string().optional(), // Creator's Profile ID
      email: z.string().email().optional(), // Creator's email
      displayName: z.string().optional(), // Creator's name
      self: z.boolean().optional(), // Indicates if the creator is the calendar owner
    })
    .optional(),
  organizer: z
    .object({
      id: z.string().optional(), // Organizer's Profile ID
      email: z.string().email().optional(), // Organizer's email
      displayName: z.string().optional(), // Organizer's name
      self: z.boolean().optional(), // Indicates if the organizer is the calendar owner
    })
    .optional(),
  start: z.object({
    date: z.string().optional(), // Start date (for all-day events)
    dateTime: z.string().datetime().optional(), // Start date-time (for timed events)
    timeZone: z.string().optional(), // Timezone of the start time
  }),
  end: z.object({
    date: z.string().optional(), // End date (for all-day events)
    dateTime: z.string().datetime().optional(), // End date-time (for timed events)
    timeZone: z.string().optional(), // Timezone of the end time
  }),
  endTimeUnspecified: z.boolean().optional(), // Whether end time is unspecified
  recurrence: z.array(z.string()).optional(), // RRULE, EXRULE, RDATE, or EXDATE
  recurringEventId: z.string().optional(), // ID of recurring event
  originalStartTime: z
    .object({
      date: z.string().optional(), // Original start date (for all-day events)
      dateTime: z.string().datetime().optional(), // Original start date-time (for timed events)
      timeZone: z.string().optional(), // Timezone of the original start time
    })
    .optional(),
  transparency: z.enum(["opaque", "transparent"]).optional(), // Transparency
  visibility: z.enum(["default", "public", "private"]).optional(), // Visibility
  iCalUID: z.string().optional(), // Event unique identifier
  sequence: z.number().optional(), // Sequence number
  attendees: z
    .array(
      z.object({
        id: z.string().optional(), // Attendee's Profile ID
        email: z.string().email().optional(), // Attendee's email
        displayName: z.string().optional(), // Attendee's name
        organizer: z.boolean().optional(), // Whether attendee is the organizer
        self: z.boolean().optional(), // Whether attendee is the calendar owner
        resource: z.boolean().optional(), // Whether attendee is a resource
        optional: z.boolean().optional(), // Whether attendance is optional
        responseStatus: z.enum(["needsAction", "declined", "tentative", "accepted"]).optional(), // Attendee's response status
        comment: z.string().optional(), // Comment from attendee
        additionalGuests: z.number().optional(), // Number of additional guests
      })
    )
    .optional(),
  attendeesOmitted: z.boolean().optional(), // Whether attendees are omitted
  hangoutLink: z.string().url().optional(), // Hangout link
  conferenceData: z
    .object({
      createRequest: z
        .object({
          requestId: z.string(), // Request ID
          conferenceSolutionKey: z
            .object({
              type: z.string(), // Solution type (e.g., "hangoutsMeet")
            })
            .optional(),
          status: z
            .object({
              statusCode: z.string(), // Status code
            })
            .optional(),
        })
        .optional(),
      entryPoints: z
        .array(
          z.object({
            entryPointType: z.string(), // Entry point type (e.g., "video")
            uri: z.string().url(), // URI for the entry point
            label: z.string().optional(), // Label for the entry point
            pin: z.string().optional(), // PIN for the entry point
            accessCode: z.string().optional(), // Access code for the entry point
            meetingCode: z.string().optional(), // Meeting code for the entry point
            passcode: z.string().optional(), // Passcode for the entry point
            password: z.string().optional(), // Password for the entry point
          })
        )
        .optional(),
      conferenceSolution: z
        .object({
          key: z.object({
            type: z.string(), // Solution type (e.g., "hangoutsMeet")
          }),
          name: z.string(), // Solution name
          iconUri: z.string().url(), // URI of the solution icon
        })
        .optional(),
      conferenceId: z.string().optional(), // Conference ID
      signature: z.string().optional(), // Conference signature
      notes: z.string().optional(), // Conference notes
    })
    .optional(),
  reminders: z
    .object({
      useDefault: z.boolean(), // Whether to use the default reminders
      overrides: z
        .array(
          z.object({
            method: z.enum(["email", "sms", "popup"]), // Reminder method
            minutes: z.number(), // Number of minutes before the event
          })
        )
        .optional(),
    })
    .optional(),
  eventType: z.enum(["default", "focusTime", "outOfOffice", "workingLocation"]).optional(), // Event type
})

export type GoogleCalendarEvent = z.infer<typeof googleCalendarEventSchema>

const googleCalendarEventListSchema = z.object({
  kind: z.literal("calendar#events"), // Resource type (fixed value)
  etag: z.string(), // ETag for the collection
  summary: z.string().optional(), // Summary of the calendar
  description: z.string().optional(), // Description of the calendar
  updated: z.string().datetime(), // Last modification time of the calendar
  timeZone: z.string().optional(), // Timezone of the calendar
  accessRole: z.enum(["none", "freeBusyReader", "reader", "writer", "owner"]), // User's access role for this calendar
  defaultReminders: z
    .array(
      z.object({
        method: z.enum(["email", "sms", "popup"]), // Reminder method
        minutes: z.number(), // Number of minutes before the event
      })
    )
    .optional(), // Default reminders for the authenticated user
  nextPageToken: z.string().optional(), // Token for retrieving the next page of results
  nextSyncToken: z.string().optional(), // Token for retrieving changes since the last request
  items: z.array(googleCalendarEventSchema), // List of events on the calendar
})

export type GoogleCalendarEventList = z.infer<typeof googleCalendarEventListSchema>

export default googleCalendarEventListSchema
