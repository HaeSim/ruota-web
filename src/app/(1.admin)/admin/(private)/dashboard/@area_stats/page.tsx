import { delay } from "@/app/(1.admin)/admin/(private)/_config/mock/mock-api"
import { AreaGraph } from "@/app/(1.admin)/admin/(private)/dashboard/_components/AreaGraph/area-graph"

export default async function AreaStats() {
  await await delay(2000)
  return <AreaGraph />
}
