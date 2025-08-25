"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { FileInput, HomeIcon, List } from "lucide-react";
import Link from "next/link";
import NavMain from "./nav-main";
import { routesUrl } from "../utils/routesUrl";

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
      icon: List,
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
      icon: FileInput,
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
        {
          title: "Text Editor",
          url: routesUrl.textEditor,
        },
        {
          title: "Example",
          url: routesUrl.example,
        },
      ],
    },
    {
      title: "Components",
      url: routesUrl.accordian,
      isActive: true,
      icon: FileInput,
      items: [
        {
          title: "Accordian",
          url: routesUrl.accordian,
        },
        {
          title: "Card",
          url: routesUrl.card,
        },
        {
          title: "Tabs",
          url: routesUrl.tabs,
        },
        {
          title: "Table",
          url: routesUrl.paginationOrTable,
        },
        {
          title: "Tool Tip",
          url: routesUrl.toolTip,
        },
        {
          title: "PopeOver",
          url: routesUrl.popeover,
        },
        {
          title: "Dialog",
          url: routesUrl.dialog,
        },
        {
          title: "Drawer",
          url: routesUrl.drawer,
        },
        {
          title: "Side Bar",
          url: routesUrl.sideBar,
        },
        {
          title: 'Sooner',
          url: routesUrl.toaster
        }
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { state } = useSidebar();
  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarContent
          // className={$theme-bg}
          className={
            state === "collapsed"
              ? "theme-bg sidebarMenuCollapsed main-menu-outer"
              : "theme-bg main-menu-outer"
          }
        >
          <div className="main-logo border-b[#0A0F15] bg[#0A0F15] flex h-20 items-center justify-center">
            <Link href="/admin" className="flex-shrink-0">
              {state === "collapsed" ? (
                <img src="/ace-logo.png" alt="Logo small" className="w-12" />
              ) : (
                <img
                  src="/acewebxlogo.png"
                  className="w-48 mt-5"
                  alt="Logo full"
                />
              )}
            </Link>
            {/* <p className={cn(
              'font-semibold transition-all',
              state === 'collapsed'
                ? 'w-0 overflow-hidden opacity-0'
                : 'w-auto opacity-100'
            )}
          >
          </p> */}
          </div>
          <NavMain homeItem={data.home} items={data.navMain} />
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
}

export const sideBarCode = `"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { FileInput, HomeIcon, List } from "lucide-react";
import Link from "next/link";
import NavMain from "./nav-main";
import { routesUrl } from "../utils/routesUrl";

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
      icon: List,
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
      icon: FileInput,
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
        {
          title: "Text Editor",
          url: routesUrl.textEditor,
        },
        {
          title: "Example",
          url: routesUrl.example,
        },
      ],
    },
    {
      title: "Components",
      url: routesUrl.accordian,
      isActive: true,
      icon: FileInput,
      items: [
        {
          title: "Accordian",
          url: routesUrl.accordian,
        },
        {
          title: "Card",
          url: routesUrl.card,
        },
        {
          title: "Tabs",
          url: routesUrl.tabs,
        },
        {
          title: "Table",
          url: routesUrl.paginationOrTable,
        },
        {
          title: "Tool Tip",
          url: routesUrl.toolTip,
        },
        {
          title: "PopeOver",
          url: routesUrl.popeover,
        },
        {
          title: "Dialog",
          url: routesUrl.dialog,
        },
        {
          title: "Drawer",
          url: routesUrl.drawer,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { state } = useSidebar();
  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarContent
          // className={$theme-bg}
          className={
            state === "collapsed"
              ? "theme-bg sidebarMenuCollapsed main-menu-outer"
              : "theme-bg main-menu-outer"
          }
        >
          <div className="main-logo border-b[#0A0F15] bg[#0A0F15] flex h-20 items-center justify-center">
            <Link href="/admin" className="flex-shrink-0">
              {state === "collapsed" ? (
                <img src="/ace-logo.png" alt="Logo small" className="w-12" />
              ) : (
                <img
                  src="/acewebxlogo.png"
                  className="w-48 mt-5"
                  alt="Logo full"
                />
              )}
            </Link>

          </div>
          <NavMain homeItem={data.home} items={data.navMain} />
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
}
`;
