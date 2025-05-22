import { AreaGraph } from "@/app/(1.admin)/admin/(private)/dashboard/components/area-graph"
import { delay } from "@/app/(1.admin)/constants/mock-api"

export default async function AreaStats() {
  await await delay(2000)
  return <AreaGraph />
}
