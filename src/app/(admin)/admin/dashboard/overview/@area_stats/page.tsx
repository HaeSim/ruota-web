import { delay } from "@/app/(admin)/constants/mock-api"
import { AreaGraph } from "@/app/(admin)/feature/overview/components/area-graph"

export default async function AreaStats() {
  await await delay(2000)
  return <AreaGraph />
}
