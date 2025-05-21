import { RecentSales } from "@/app/(1.admin)/admin/dashboard/overview/components/recent-sales"
import { delay } from "@/app/(1.admin)/constants/mock-api"

export default async function Sales() {
  await delay(3000)
  return <RecentSales />
}
