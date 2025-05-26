import { createSupabaseBrowser } from "./supabase-browser"

export async function uploadBannerImage(file: File, type: "mobile" | "pc") {
  const supabase = createSupabaseBrowser()

  // 사용자 인증 상태 확인
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()
  if (userError || !user) {
    throw new Error("사용자 인증이 필요합니다.")
  }

  const filePath = `banners/${type}/${Date.now()}_${file.name}`

  const { error } = await supabase.storage.from("public").upload(filePath, file, { upsert: true })

  if (error) {
    console.error("Storage upload error:", error)
    throw new Error(`파일 업로드에 실패했습니다: ${error.message}`)
  }

  const { data } = supabase.storage.from("public").getPublicUrl(filePath)
  return data.publicUrl
}
