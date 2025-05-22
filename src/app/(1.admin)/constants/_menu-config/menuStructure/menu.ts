import { List } from "lucide-react"
import type { Menu } from "../types"

export const menuManageMenu: Menu = {
  title: "메뉴관리",
  icon: List,
  menuList: [
    {
      title: "음료",
      link: "/admin/menu/beverage",
    },
    {
      title: "디저트",
      link: "/admin/menu/dessert",
    },
  ],
}
