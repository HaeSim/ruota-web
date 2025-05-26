import { BannerForm } from "@/app/(1.admin)/admin/(private)/communication/banner/_components/banner-form"
import PageContainer from "../../../_components/layout/page-container"

export default function NewBannerPage() {
  return (
    <PageContainer>
      <div className="h-full w-full">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">새 배너 등록</h1>
          <p className="text-muted-foreground">웹사이트에 표시될 새로운 배너를 등록합니다.</p>
        </div>
        <BannerForm mode="create" />
      </div>
    </PageContainer>
  )
}
