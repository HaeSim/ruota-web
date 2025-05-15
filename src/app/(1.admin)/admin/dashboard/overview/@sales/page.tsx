import { delay } from "@/app/(1.admin)/constants/mock-api"
import { RecentSales } from "@/app/(1.admin)/feature/overview/components/recent-sales"

export default async function Sales() {
  await delay(3000)
  return <RecentSales />
}
