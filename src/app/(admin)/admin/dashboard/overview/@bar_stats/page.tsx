import { delay } from "@/app/(admin)/constants/mock-api"
import { BarGraph } from "@/app/(admin)/feature/overview/components/bar-graph"

export default async function BarStats() {
  await await delay(1000)

  return <BarGraph />
}
