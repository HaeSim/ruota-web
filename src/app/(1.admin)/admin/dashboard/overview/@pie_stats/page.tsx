import { delay } from "@/app/(1.admin)/constants/mock-api"
import { PieGraph } from "@/app/(1.admin)/feature/overview/components/pie-graph"

export default async function Stats() {
  await delay(1000)
  return <PieGraph />
}
