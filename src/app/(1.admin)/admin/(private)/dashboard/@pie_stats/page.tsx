import { delay } from "@/app/(1.admin)/admin/(private)/_config/mock/mock-api"
import { PieGraph } from "@/app/(1.admin)/admin/(private)/dashboard/_components/PieGraph/pie-graph"

export default async function Stats() {
  await delay(1000)
  return <PieGraph />
}
