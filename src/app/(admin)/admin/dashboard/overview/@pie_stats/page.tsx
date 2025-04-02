import { delay } from "@/app/(admin)/constants/mock-api"
import { PieGraph } from "@/app/(admin)/feature/overview/components/pie-graph"

export default async function Stats() {
  await delay(1000)
  return <PieGraph />
}
