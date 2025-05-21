import { PieGraph } from "@/app/(1.admin)/admin/dashboard/overview/components/pie-graph"
import { delay } from "@/app/(1.admin)/constants/mock-api"

export default async function Stats() {
  await delay(1000)
  return <PieGraph />
}
