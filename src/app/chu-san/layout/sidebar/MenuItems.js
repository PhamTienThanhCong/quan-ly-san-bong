import {
  IconLayoutDashboard,
  IconChartBar,
  IconHistory,
  IconListCheck,
  IconCalendarEvent,
  IconSoccerField,
  IconPlus,
  IconUser,
  IconUsers,
  IconMessage
} from "@tabler/icons-react";
import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Tài chính"
  },
  {
    id: uniqueId(),
    title: "Bảng tổng quan",
    icon: IconLayoutDashboard,
    href: "/chu-san"
  },
  {
    id: uniqueId(),
    title: "Chi tiết doanh thu",
    icon: IconChartBar,
    href: "/chu-san/doanh-thu"
  },
  {
    id: uniqueId(),
    title: "Lịch sử nạp rút",
    icon: IconHistory,
    href: "/chu-san/nap-rut"
  },
  {
    id: uniqueId(),
    title: "Lịch sử giao dịch",
    icon: IconHistory,
    href: "/chu-san/lich-su-giao-dich"
  },
  {
    navlabel: true,
    subheader: "Quản lý đặt sân"
  },
  {
    id: uniqueId(),
    title: "Lịch sử đặt sân",
    icon: IconListCheck,
    href: "/chu-san/danh-sach-dat-san"
  },
  {
    navlabel: true,
    subheader: "Quản lý người dùng",
    onlyAdmin: true
  },
  {
    id: uniqueId(),
    title: "Danh sách người dùng",
    icon: IconUsers,
    href: "/chu-san/danh-sach-nguoi-dung",
    onlyAdmin: true
  },
  {
    id: uniqueId(),
    title: "Danh sách chủ sân",
    icon: IconUsers,
    href: "/chu-san/danh-sach-chu-san",
    onlyAdmin: true
  },
  {
    id: uniqueId(),
    title: "Danh sách khiếu nại",
    icon: IconMessage,
    href: "/chu-san/danh-sach-feedback",
    onlyAdmin: true
  },
  {
    navlabel: true,
    subheader: "Quản lý sân"
  },
  {
    id: uniqueId(),
    title: "Danh sách sân",
    icon: IconSoccerField,
    href: "/chu-san/danh-sach-san"
  },
  {
    id: uniqueId(),
    title: "Thêm sân",
    icon: IconPlus,
    href: "/chu-san/them-san",
    onlyUser: true
  }
];

export default Menuitems;
