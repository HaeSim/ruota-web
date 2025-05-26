import { createSupabaseServer } from "@/utils/supabase/supabase-server"
import {
  type Banner,
  type BannerBulkDeleteInput,
  type BannerBulkStatusUpdateInput,
  type BannerCreateInput,
  type BannerListQuery,
  type BannerOrderUpdateInput,
  type BannerStatusUpdateInput,
  type BannerUpdateInput,
} from "../schemas/banner.schema"

export const getBannerList = async (query: BannerListQuery): Promise<{ items: Banner[]; total: number }> => {
  const supabase = await createSupabaseServer()
  const { page = 1, limit = 20, status, device_type, search, start_date, end_date } = query
  let dbQuery = supabase.from("banners").select("*", { count: "exact" })
  if (status && status !== "all") {
    dbQuery = dbQuery.eq("is_active", status === "active")
  }
  if (device_type && device_type !== "all") {
    dbQuery = dbQuery.eq("device_type", device_type)
  }
  if (search) {
    dbQuery = dbQuery.ilike("title", `%${search}%`)
  }
  if (start_date) {
    dbQuery = dbQuery.gte("start_date", start_date)
  }
  if (end_date) {
    dbQuery = dbQuery.lte("end_date", end_date)
  }
  dbQuery = dbQuery.order("display_order", { ascending: true }).range((page - 1) * limit, page * limit - 1)
  const { data, count, error } = await dbQuery
  if (error) throw error
  return {
    items: (data ?? []) as Banner[],
    total: count ?? 0,
  }
}

export const getBannerById = async (id: number): Promise<Banner> => {
  const supabase = await createSupabaseServer()
  const { data, error } = await supabase.from("banners").select("*").eq("id", id).single()
  if (error) throw error
  return data as Banner
}

export const createBanner = async (input: BannerCreateInput): Promise<Banner> => {
  const supabase = await createSupabaseServer()
  const { data, error } = await supabase.from("banners").insert([input]).select().single()
  if (error) throw error
  return data as Banner
}

export const updateBanner = async (input: BannerUpdateInput): Promise<Banner> => {
  const { id, ...update } = input

  // undefined 필드 제거 (실제 변경된 필드만 업데이트)
  const filteredUpdate = Object.fromEntries(Object.entries(update).filter(([, value]) => value !== undefined))

  console.log("배너 수정 요청 - ID:", id)
  console.log("업데이트 데이터:", filteredUpdate)

  const supabase = await createSupabaseServer()
  const { data, error } = await supabase.from("banners").update(filteredUpdate).eq("id", id).select().single()

  if (error) {
    console.error("배너 수정 오류:", error)
    throw error
  }

  console.log("배너 수정 성공:", data)
  return data as Banner
}

export const deleteBanner = async (id: number): Promise<{ id: number }> => {
  const supabase = await createSupabaseServer()
  const { error } = await supabase.from("banners").delete().eq("id", id)
  if (error) throw error
  return { id }
}

export const updateBannerOrder = async (orders: BannerOrderUpdateInput): Promise<{ success: boolean }> => {
  const supabase = await createSupabaseServer()
  const updates = await Promise.all(
    orders.map(({ id, display_order }) => supabase.from("banners").update({ display_order }).eq("id", id))
  )
  const hasError = updates.some(({ error }) => error)
  if (hasError) throw new Error("일부 배너 순서 변경 실패")
  return { success: true }
}

export const updateBannerStatus = async (
  input: BannerStatusUpdateInput
): Promise<{ id: number; is_active: boolean }> => {
  const { id, is_active } = input
  const supabase = await createSupabaseServer()
  const { error } = await supabase.from("banners").update({ is_active }).eq("id", id)
  if (error) throw error
  return { id, is_active }
}

export const bulkUpdateBannerStatus = async (
  input: BannerBulkStatusUpdateInput
): Promise<{ ids: number[]; is_active: boolean }> => {
  const { ids, is_active } = input
  const supabase = await createSupabaseServer()
  const { error } = await supabase.from("banners").update({ is_active }).in("id", ids)
  if (error) throw error
  return { ids, is_active }
}

export const bulkDeleteBanner = async (input: BannerBulkDeleteInput): Promise<{ ids: number[] }> => {
  const { ids } = input
  const supabase = await createSupabaseServer()
  const { error } = await supabase.from("banners").delete().in("id", ids)
  if (error) throw error
  return { ids }
}
