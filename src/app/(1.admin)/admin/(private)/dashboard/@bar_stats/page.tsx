import { BarGraph } from "@/app/(1.admin)/admin/(private)/dashboard/components/bar-graph"
import { delay } from "@/app/(1.admin)/constants/mock-api"

export default async function BarStats() {
  await await delay(1000)

  return <BarGraph />
}
