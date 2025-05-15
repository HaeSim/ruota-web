import { NextResponse } from "next/server"
import { env } from "@/env.mjs"
import { auth } from "@/lib/auth"

export async function GET() {
  const session = await auth()

  console.log(session)

  if (!session?.user) {
    return NextResponse.redirect(new URL("/", env.NEXT_PUBLIC_URL || "http://localhost:3000"))
  } else {
    return NextResponse.redirect(new URL("/admin/dashboard/overview", env.NEXT_PUBLIC_URL || "http://localhost:3000"))
  }
}
