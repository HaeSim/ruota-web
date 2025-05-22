import { delay } from "@/app/(1.admin)/admin/(private)/_config/mock/mock-api"
import { BarGraph } from "@/app/(1.admin)/admin/(private)/dashboard/_components/BarGraph/bar-graph"

export default async function BarStats() {
  await await delay(1000)

  return <BarGraph />
}
