import { BiCart } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { HiOutlineUserGroup, HiCurrencyDollar } from "react-icons/hi";

export const links = [
  {
    label: "Dashboard",
    path: "/",
    icon: <MdDashboardCustomize />,
  },
  {
    label: "Users",
    path: "/users",
    icon: <HiOutlineUserGroup />,
  },
  {
    label: "Orders",
    path: "/orders",
    icon: <BiCart />,
  },
  {
    label: "Finance",
    path: "/finance",
    icon: <HiCurrencyDollar />,
  },
];
