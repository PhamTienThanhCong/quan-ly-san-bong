import {
  IconLayoutDashboard,
  IconChartBar,
  IconHistory,
  IconListCheck,
  IconCalendarEvent,
  IconSoccerField,
  IconPlus
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
    navlabel: true,
    subheader: "Quản lý đặt sân"
  },
  {
    id: uniqueId(),
    title: "Danh sách đặt sân",
    icon: IconListCheck,
    href: "/chu-san/danh-sach-dat-san"
  },
  {
    id: uniqueId(),
    title: "Đặt sân",
    icon: IconCalendarEvent,
    href: "/chu-san/dat-san"
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
    href: "/chu-san/them-san"
  }
];

export default Menuitems;
