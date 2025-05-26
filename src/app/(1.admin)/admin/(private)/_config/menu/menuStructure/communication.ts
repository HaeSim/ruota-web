import { Home } from "lucide-react"
import type { Menu } from "../types"

export const communicationMenu: Menu = {
  title: "소통관리",
  icon: Home,
  menuList: [
    {
      title: "배너",
      link: "/admin/communication/banner",
      menuList: [
        {
          title: "배너 등록",
          link: "/admin/communication/banner/new",
        },
        {
          title: "배너 순서관리",
          link: "/admin/communication/banner/order",
        },
        {
          title: "배너 상세",
          link: "/admin/communication/banner/[bannerIdx]",
          menuList: [
            {
              title: "배너 수정",
              link: "/admin/communication/banner/[bannerIdx]/edit",
            },
          ],
        },
      ],
    },
    {
      title: "팝업",
      link: "/admin/communication/popup",
    },
  ],
}
