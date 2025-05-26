import { env } from "@/env.mjs"
import { type GoogleCalendarEventList } from "../schemas/googleCalendar.schema"

export const getGoogleCalendarEventsByMonth = async ({
  month,
  year,
}: {
  month: number
  year: number
}): Promise<GoogleCalendarEventList> => {
  try {
    // 한국 시각 기준으로 시작일과 종료일을 설정합니다.
    // 시작일 : 현재 year년 month-1월 1일 00시 00분 00초
    // 종료일 : 현재 year년 month+1월 마지막 날 23시 59분 59초
    // 형식 : 2011-06-03T10:00:00+09:00
    const timeMin = `${year}-${month}-01T00:00:00+09:00`
    const timeMax = `${year}-${month + 2}-01T00:00:00+09:00`
    const params = new URLSearchParams({
      key: env.GOOGLE_CALENDAR_API_KEY,
      timeMin,
      timeMax,
      orderBy: "startTime",
      singleEvents: "true",
    })
    const url = `https://www.googleapis.com/calendar/v3/calendars/${env.GOOGLE_CALENDAR_ID}/events?${params.toString()}`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // 캐싱 정책 필요시 여기에 추가
    })
    if (!response.ok) {
      const errorData = await response.json().catch(() => undefined)
      console.error("Failed to get Google Calendar events:", errorData)
      throw new Error("Google Calendar API 요청 실패")
    }
    const data = (await response.json()) as GoogleCalendarEventList
    return data
  } catch (error) {
    console.error("Failed to get Google Calendar events:", error)
    return {
      kind: "calendar#events",
      etag: "",
      updated: "",
      accessRole: "owner",
      items: [],
    }
  }
}
