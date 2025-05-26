import {
  bannerBulkDeleteSchema,
  bannerBulkStatusUpdateSchema,
  bannerCreateSchema,
  bannerIdSchema,
  bannerListQuerySchema,
  bannerOrderUpdateSchema,
  bannerStatusUpdateSchema,
  bannerUpdateInputSchema,
} from "../schemas/banner.schema"
import {
  bulkDeleteBanner,
  bulkUpdateBannerStatus,
  createBanner,
  deleteBanner,
  getBannerById,
  getBannerList,
  updateBanner,
  updateBannerOrder,
  updateBannerStatus,
} from "../services/banner.service"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const bannerRouter = createTRPCRouter({
  list: protectedProcedure.input(bannerListQuerySchema).query(async ({ input }) => {
    return getBannerList(input)
  }),
  getById: protectedProcedure.input(bannerIdSchema).query(async ({ input }) => {
    return getBannerById(input.id)
  }),
  create: protectedProcedure.input(bannerCreateSchema).mutation(async ({ input }) => {
    return createBanner(input)
  }),
  update: protectedProcedure.input(bannerUpdateInputSchema).mutation(async ({ input }) => {
    return updateBanner(input)
  }),
  delete: protectedProcedure.input(bannerIdSchema).mutation(async ({ input }) => {
    return deleteBanner(input.id)
  }),
  updateOrder: protectedProcedure.input(bannerOrderUpdateSchema).mutation(async ({ input }) => {
    return updateBannerOrder(input)
  }),
  updateStatus: protectedProcedure.input(bannerStatusUpdateSchema).mutation(async ({ input }) => {
    return updateBannerStatus(input)
  }),
  bulkUpdateStatus: protectedProcedure.input(bannerBulkStatusUpdateSchema).mutation(async ({ input }) => {
    return bulkUpdateBannerStatus(input)
  }),
  bulkDelete: protectedProcedure.input(bannerBulkDeleteSchema).mutation(async ({ input }) => {
    return bulkDeleteBanner(input)
  }),
})
