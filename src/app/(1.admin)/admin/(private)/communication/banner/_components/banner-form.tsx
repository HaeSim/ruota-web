"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format, parseISO } from "date-fns"
import { Calendar, Loader2, Upload, X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { api } from "@/app/(0.api)/_trpc/react"
import {
  type Banner,
  type BannerCreateInput,
  bannerCreateSchema,
  type BannerUpdateInput,
} from "@/app/(0.api)/_trpc/server/api/schemas/banner.schema"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { uploadBannerImage } from "@/utils/supabase/uploadBannerImage"

interface BannerFormProps {
  initialData?: Banner
  mode?: "create" | "edit"
}

export function BannerForm({ initialData, mode = "create" }: BannerFormProps) {
  const router = useRouter()
  const [mobilePreview, setMobilePreview] = useState<string | null>(initialData?.mobile_image_url ?? null)
  const [pcPreview, setPcPreview] = useState<string | null>(initialData?.pc_image_url ?? null)
  const [isUploadingImage, setIsUploadingImage] = useState(false)

  const isEditMode = mode === "edit" && initialData

  const form = useForm<BannerCreateInput>({
    resolver: zodResolver(bannerCreateSchema.strict()),
    defaultValues: {
      title: "",
      description: "",
      mobile_image_url: "",
      pc_image_url: "",
      link_url: "",
      device_type: "all",
      display_order: 1,
      start_date: new Date().toISOString(),
      end_date: "",
      is_new_window: false,
      is_active: true,
    },
  })

  // 수정 모드일 때 초기 데이터 설정
  useEffect(() => {
    if (isEditMode) {
      console.log("수정 모드 초기 데이터 설정:", initialData)
      const formData: BannerCreateInput = {
        title: initialData.title,
        description: initialData.description ?? "",
        mobile_image_url: initialData.mobile_image_url,
        pc_image_url: initialData.pc_image_url,
        link_url: initialData.link_url ?? "",
        is_new_window: initialData.is_new_window,
        device_type: initialData.device_type,
        display_order: initialData.display_order,
        start_date: initialData.start_date,
        end_date: initialData.end_date ?? "",
        is_active: initialData.is_active,
      }
      console.log("변환된 폼 데이터:", formData)
      form.reset(formData)
      setMobilePreview(initialData.mobile_image_url)
      setPcPreview(initialData.pc_image_url)
    }
  }, [initialData, isEditMode, form])

  const createMutation = api.banner.create.useMutation({
    onSuccess: () => {
      toast.success("배너 생성 성공")
      router.push("/admin/communication/banner")
    },
    onError: (error) => {
      toast.error("배너 생성 실패")
      console.error("배너 생성 실패:", error)
    },
  })

  const updateMutation = api.banner.update.useMutation({
    onSuccess: () => {
      toast.success("배너 수정 성공")
      router.push("/admin/communication/banner")
    },
    onError: (error) => {
      toast.error("배너 수정 실패")
      console.error("배너 수정 실패:", error)
    },
  })

  // 전체 로딩 상태 (폼 제출 중 또는 이미지 업로드 중)
  const isLoading =
    form.formState.isSubmitting || createMutation.isPending || updateMutation.isPending || isUploadingImage

  // 이미지 업로드 핸들러
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, type: "mobile" | "pc") => {
    const file = e.target.files?.[0]
    if (!file || isLoading) return

    try {
      setIsUploadingImage(true)
      const url = await uploadBannerImage(file, type)
      form.setValue(type === "mobile" ? "mobile_image_url" : "pc_image_url", url, { shouldValidate: true })
      if (type === "mobile") setMobilePreview(url)
      else setPcPreview(url)
      toast.success(`${type === "mobile" ? "모바일" : "PC"} 이미지 업로드 완료`)
    } catch (error) {
      console.error("이미지 업로드 실패:", error)
      toast.error(`${type === "mobile" ? "모바일" : "PC"} 이미지 업로드 실패`)
    } finally {
      setIsUploadingImage(false)
    }
  }

  const onSubmit = (data: BannerCreateInput) => {
    if (isLoading) return

    console.log("폼 제출 데이터:", data)
    console.log("수정 모드:", isEditMode)
    console.log("initialData:", initialData)

    if (isEditMode) {
      if (!initialData?.id) {
        console.error("수정 모드이지만 ID가 없습니다:", initialData)
        toast.error("배너 정보를 찾을 수 없습니다.")
        return
      }

      const updateData: BannerUpdateInput = {
        id: initialData.id,
        ...data,
      }
      console.log("수정 요청 데이터:", updateData)
      updateMutation.mutate(updateData)
    } else {
      console.log("생성 요청 데이터:", data)
      createMutation.mutate(data)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* 배너 기본 정보 */}
        <Card>
          <CardHeader>
            <CardTitle>배너 기본 정보</CardTitle>
            <CardDescription>배너의 기본 정보를 입력해주세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 제목 */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>제목 *</FormLabel>
                  <FormControl>
                    <Input placeholder="배너 제목을 입력하세요" disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 설명 */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>설명</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="배너에 대한 설명을 입력하세요"
                      rows={3}
                      disabled={isLoading}
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 디바이스 타입 */}
            <FormField
              control={form.control}
              name="device_type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>디바이스 타입 *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex space-x-4"
                      disabled={isLoading}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mobile" id="mobile" disabled={isLoading} />
                        <FormLabel htmlFor="mobile" className="!mt-0 cursor-pointer">
                          모바일
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pc" id="pc" disabled={isLoading} />
                        <FormLabel htmlFor="pc" className="!mt-0 cursor-pointer">
                          PC
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="all" disabled={isLoading} />
                        <FormLabel htmlFor="all" className="!mt-0 cursor-pointer">
                          전체
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* 이미지 업로드 */}
        <Card>
          <CardHeader>
            <CardTitle>이미지 업로드</CardTitle>
            <CardDescription>모바일과 PC에 표시될 이미지를 업로드해주세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="mobile" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mobile" disabled={isLoading}>
                  모바일 이미지
                </TabsTrigger>
                <TabsTrigger value="pc" disabled={isLoading}>
                  PC 이미지
                </TabsTrigger>
              </TabsList>

              {/* 모바일 이미지 */}
              <TabsContent value="mobile" className="space-y-4">
                <FormField
                  control={form.control}
                  name="mobile_image_url"
                  render={({ field: _field }) => (
                    <FormItem>
                      <FormLabel>모바일용 이미지 * (권장 사이즈: 375x667px)</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4">
                          <label
                            htmlFor="mobile-image"
                            className={cn(
                              "flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed",
                              isLoading && "cursor-not-allowed opacity-50"
                            )}
                          >
                            {mobilePreview ? (
                              <div className="relative h-full w-full">
                                <Image
                                  src={mobilePreview || "/placeholder.svg"}
                                  alt="Mobile preview"
                                  fill
                                  className="rounded-md object-cover"
                                />
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="icon"
                                  className="absolute -top-2 -right-2 h-6 w-6"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    if (!isLoading) {
                                      setMobilePreview(null)
                                      form.setValue("mobile_image_url", "")
                                    }
                                  }}
                                  disabled={isLoading}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <>
                                {isUploadingImage ? (
                                  <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
                                ) : (
                                  <Upload className="text-muted-foreground h-8 w-8" />
                                )}
                                <span className="text-muted-foreground mt-2 text-xs">
                                  {isUploadingImage ? "업로드 중..." : "이미지 업로드"}
                                </span>
                              </>
                            )}
                          </label>
                          <input
                            id="mobile-image"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageChange(e, "mobile")}
                            disabled={isLoading}
                          />
                          <div className="text-muted-foreground text-sm">
                            <p>지원 형식: JPG, PNG, WebP</p>
                            <p>최대 용량: 5MB</p>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              {/* PC 이미지 */}
              <TabsContent value="pc" className="space-y-4">
                <FormField
                  control={form.control}
                  name="pc_image_url"
                  render={({ field: _field }) => (
                    <FormItem>
                      <FormLabel>PC용 이미지 * (권장 사이즈: 1920x1080px)</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4">
                          <label
                            htmlFor="pc-image"
                            className={cn(
                              "flex h-32 w-64 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed",
                              isLoading && "cursor-not-allowed opacity-50"
                            )}
                          >
                            {pcPreview ? (
                              <div className="relative h-full w-full">
                                <Image
                                  src={pcPreview || "/placeholder.svg"}
                                  alt="PC preview"
                                  fill
                                  className="rounded-md object-cover"
                                />
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="icon"
                                  className="absolute -top-2 -right-2 h-6 w-6"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    if (!isLoading) {
                                      setPcPreview(null)
                                      form.setValue("pc_image_url", "")
                                    }
                                  }}
                                  disabled={isLoading}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <>
                                {isUploadingImage ? (
                                  <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
                                ) : (
                                  <Upload className="text-muted-foreground h-8 w-8" />
                                )}
                                <span className="text-muted-foreground mt-2 text-xs">
                                  {isUploadingImage ? "업로드 중..." : "이미지 업로드"}
                                </span>
                              </>
                            )}
                          </label>
                          <input
                            id="pc-image"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageChange(e, "pc")}
                            disabled={isLoading}
                          />
                          <div className="text-muted-foreground text-sm">
                            <p>지원 형식: JPG, PNG, WebP</p>
                            <p>최대 용량: 10MB</p>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* 링크 설정 */}
        <Card>
          <CardHeader>
            <CardTitle>링크 설정</CardTitle>
            <CardDescription>배너 클릭 시 이동할 URL을 설정해주세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* URL */}
            <FormField
              control={form.control}
              name="link_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://example.com"
                      disabled={isLoading}
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 새 창 열기 */}
            <FormField
              control={form.control}
              name="is_new_window"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} disabled={isLoading} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>새 창 열기</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* 노출 설정 */}
        <Card>
          <CardHeader>
            <CardTitle>노출 설정</CardTitle>
            <CardDescription>배너의 노출 기간과 순서를 설정해주세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 노출 시작일 & 종료일 */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>노출 시작일시 *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                            disabled={isLoading}
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {field.value ? format(parseISO(field.value), "yyyy-MM-dd") : <span>날짜 선택</span>}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={field.value ? parseISO(field.value) : undefined}
                          onSelect={(date) => field.onChange(date ? date.toISOString() : "")}
                          initialFocus
                          disabled={isLoading}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="end_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>노출 종료일시</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                            disabled={isLoading}
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {field.value ? format(parseISO(field.value), "yyyy-MM-dd") : <span>날짜 선택</span>}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={field.value ? parseISO(field.value) : undefined}
                          onSelect={(date) => field.onChange(date ? date.toISOString() : undefined)}
                          initialFocus
                          disabled={isLoading}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 노출 순서 */}
            <FormField
              control={form.control}
              name="display_order"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>노출 순서</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      placeholder="1"
                      className="w-32"
                      disabled={isLoading}
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                    />
                  </FormControl>
                  <FormDescription>숫자가 낮을수록 먼저 표시됩니다.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 활성 상태 */}
            <FormField
              control={form.control}
              name="is_active"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} disabled={isLoading} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>{isEditMode ? "활성 상태" : "즉시 활성화"}</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* 버튼 */}
        <CardFooter className="flex justify-end space-x-4 px-0">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/communication/banner")}
            disabled={isLoading}
          >
            취소
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditMode ? "수정" : "저장"}
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}
