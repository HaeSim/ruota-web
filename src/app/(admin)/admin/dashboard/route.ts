import { auth } from "@/lib/auth"

export async function GET() {
  const session = await auth()

  if (session?.user) {
    return Response.redirect(new URL("/", process.env.NEXT_PUBLIC_APP_URL))
  } else {
    return Response.redirect(new URL("/admin/dashboard/overview", process.env.NEXT_PUBLIC_APP_URL))
  }
}
