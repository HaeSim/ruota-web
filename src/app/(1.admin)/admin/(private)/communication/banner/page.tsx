import { Plus } from "lucide-react"
import Link from "next/link"
import { api } from "@/app/(0.api)/_trpc/server"
import { Button } from "@/components/ui/button"
import { BannerFilters } from "./_components/banner-filters"
import { BannerList } from "./_components/banner-list"
import PageContainer from "../../_components/layout/page-container"

export default async function Page() {
  // SSR로 배너 목록 초기 데이터 패칭
  const initialData = await api.banner.list({ page: 1, limit: 20 })

  return (
    <PageContainer>
      <div className="h-full w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">배너 목록</h1>
          <Link href="/admin/communication/banner/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />새 배너 등록
            </Button>
          </Link>
        </div>
        <BannerFilters />
        <BannerList initialData={initialData} />
      </div>
    </PageContainer>
  )
}
