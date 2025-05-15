import { delay } from "@/app/(1.admin)/constants/mock-api"
import { BarGraph } from "@/app/(1.admin)/feature/overview/components/bar-graph"

export default async function BarStats() {
  await await delay(1000)

  return <BarGraph />
}
