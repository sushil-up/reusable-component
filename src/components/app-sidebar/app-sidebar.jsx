"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import NavMain from "./nav-main";
import { NavUser } from "./nav-user";
import { routesUrl } from "../utils/routesUrl";
import { title } from "process";

const data = {
  home: {
    title: "Home",
    url: routesUrl.adminPannel,
    icon: HomeIcon,
    isActive: true,
  },
  navMain: [
    {
      title: "User",
      url: routesUrl.userList,
      isActive: true,
      items: [
        {
          title: "List",
          url: routesUrl.userList,
        },
      ],
    },
    {
      title: "Form",
      url: routesUrl.userList,
      isActive: true,
      items: [
        {
          title: "Input Fields",
          url: routesUrl.inputField,
        },
        {
          title: "Select Field",
          url: routesUrl.selectField,
        },
        {
          title: "Date Picker",
          url: routesUrl.datePicker,
        },
        {
          title: "Radio Button",
          url: routesUrl.radioButton,
        },
        {
          title: "CheckBox",
          url: routesUrl.checkBox,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="theme-bg">
        <div className="flex items-center gap-3 px-2 justify-center main-logo">
          <Link href={routesUrl.adminPannel} className="flex-shrink-0">
            {" "}
            <img src="/acewebxlogo.png" className="w-44" />{" "}
          </Link>
        </div>
        <NavMain homeItem={data.home} items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
