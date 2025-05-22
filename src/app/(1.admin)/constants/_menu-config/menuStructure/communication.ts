import { Home } from "lucide-react"
import type { Menu } from "../types"

export const communicationMenu: Menu = {
  title: "소통관리",
  icon: Home,
  menuList: [
    {
      title: "배너",
      link: "/admin/communication/banner",
    },
    {
      title: "팝업",
      link: "/admin/communication/popup",
    },
  ],
}
