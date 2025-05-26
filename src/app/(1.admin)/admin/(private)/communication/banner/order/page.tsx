import { BannerOrderManager } from "@/app/(1.admin)/admin/(private)/communication/banner/_components/banner-order-manager"
import PageContainer from "../../../_components/layout/page-container"

export default function BannerOrderPage() {
  return (
    <PageContainer>
      <div className="h-full w-full">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">배너 순서 관리</h1>
          <p className="text-muted-foreground">배너의 노출 순서를 드래그 앤 드롭으로 관리할 수 있습니다.</p>
        </div>
        <BannerOrderManager />
      </div>
    </PageContainer>
  )
}
