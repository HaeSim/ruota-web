import { delay } from "@/app/(1.admin)/constants/mock-api"
import { AreaGraph } from "@/app/(1.admin)/feature/overview/components/area-graph"

export default async function AreaStats() {
  await await delay(2000)
  return <AreaGraph />
}
