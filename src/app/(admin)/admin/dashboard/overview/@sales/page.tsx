import { delay } from "@/app/(admin)/constants/mock-api"
import { RecentSales } from "@/app/(admin)/feature/overview/components/recent-sales"

export default async function Sales() {
  await delay(3000)
  return <RecentSales />
}
