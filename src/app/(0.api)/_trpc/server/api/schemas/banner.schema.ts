import { z } from "zod"

export const bannerDeviceTypeEnum = z.enum(["mobile", "pc", "all"])
export type BannerDeviceType = z.infer<typeof bannerDeviceTypeEnum>

export const bannerStatusEnum = z.enum(["active", "inactive", "all"])
export type BannerStatus = z.infer<typeof bannerStatusEnum>

export const bannerSchema = z.object({
  id: z.number(),
  title: z.string().min(1).max(200),
  description: z.string().optional(),
  mobile_image_url: z.string().url(),
  pc_image_url: z.string().url(),
  link_url: z.string().url().optional(),
  is_new_window: z.boolean(),
  device_type: bannerDeviceTypeEnum,
  display_order: z.number().int(),
  start_date: z.string().datetime(),
  end_date: z.string().datetime().optional(),
  is_active: z.boolean(),
  click_count: z.number(),
  view_count: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  created_by: z.number().optional(),
  updated_by: z.number().optional(),
})
export type Banner = z.infer<typeof bannerSchema>

export const bannerCreateSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().optional(),
  mobile_image_url: z.string().url(),
  pc_image_url: z.string().url(),
  link_url: z.string().url().optional(),
  is_new_window: z.boolean(),
  device_type: bannerDeviceTypeEnum,
  display_order: z.number().int(),
  start_date: z.string().datetime(),
  end_date: z.string().datetime().optional(),
  is_active: z.boolean(),
})
export type BannerCreateInput = z.infer<typeof bannerCreateSchema>

// 수정용 스키마 - 더 명확한 정의
export const bannerUpdateSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  description: z.string().optional(),
  mobile_image_url: z.string().url().optional(),
  pc_image_url: z.string().url().optional(),
  link_url: z.string().url().optional(),
  is_new_window: z.boolean().optional(),
  device_type: bannerDeviceTypeEnum.optional(),
  display_order: z.number().int().optional(),
  start_date: z.string().datetime().optional(),
  end_date: z.string().datetime().optional(),
  is_active: z.boolean().optional(),
})

export const bannerUpdateInputSchema = bannerUpdateSchema.extend({
  id: z.number(),
})
export type BannerUpdateInput = z.infer<typeof bannerUpdateInputSchema>

export const bannerListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: bannerStatusEnum.optional(),
  device_type: bannerDeviceTypeEnum.optional(),
  search: z.string().optional(),
  start_date: z.string().datetime().optional(),
  end_date: z.string().datetime().optional(),
})
export type BannerListQuery = z.infer<typeof bannerListQuerySchema>

export const bannerIdSchema = z.object({
  id: z.number(),
})

export const bannerStatusUpdateSchema = z.object({
  id: z.number(),
  is_active: z.boolean(),
})
export type BannerStatusUpdateInput = z.infer<typeof bannerStatusUpdateSchema>

export const bannerOrderUpdateSchema = z.array(
  z.object({
    id: z.number(),
    display_order: z.number().int(),
  })
)
export type BannerOrderUpdateInput = z.infer<typeof bannerOrderUpdateSchema>

export const bannerBulkStatusUpdateSchema = z.object({
  ids: z.array(z.number()),
  is_active: z.boolean(),
})
export type BannerBulkStatusUpdateInput = z.infer<typeof bannerBulkStatusUpdateSchema>

export const bannerBulkDeleteSchema = z.object({
  ids: z.array(z.number()),
})
export type BannerBulkDeleteInput = z.infer<typeof bannerBulkDeleteSchema>
