import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"

export async function GET() {
  const session = await auth()

  console.log(session)

  if (!session?.user) {
    return NextResponse.redirect(new URL("/", process.env.NEXTAUTH_URL || "http://localhost:3000"))
  } else {
    return NextResponse.redirect(
      new URL("/admin/dashboard/overview", process.env.NEXTAUTH_URL || "http://localhost:3000")
    )
  }
}
