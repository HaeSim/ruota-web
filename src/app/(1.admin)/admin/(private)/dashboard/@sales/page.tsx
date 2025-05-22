import { delay } from "@/app/(1.admin)/admin/(private)/_config/mock/mock-api"
import { RecentSales } from "@/app/(1.admin)/admin/(private)/dashboard/_components/RecentSales/recent-sales"

export default async function Sales() {
  await delay(3000)
  return <RecentSales />
}
