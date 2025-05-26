import { api } from "@/app/(0.api)/_trpc/server"
import { BannerDetail } from "@/app/(1.admin)/admin/(private)/communication/banner/_components/banner-detail"
import PageContainer from "../../../_components/layout/page-container"

export default async function BannerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const bannerId = parseInt(id, 10)

  // SSR로 배너 상세 정보 패칭
  const bannerData = await api.banner.getById({ id: bannerId })

  return (
    <PageContainer>
      <div className="h-full w-full">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">배너 상세 정보</h1>
          <p className="text-muted-foreground">배너 ID: {id}</p>
        </div>
        <BannerDetail id={id} initialData={bannerData} />
      </div>
    </PageContainer>
  )
}
