"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { routesUrl } from "../utils/routesUrl";

export default function NavMain({ homeItem, items }) {
  const { state } = useSidebar();
  const pathname = usePathname();
  const isActiveUrl = (url) => {
    if (url === routesUrl.adminPannel) return pathname === url; // Exact match for Home
    return pathname.startsWith(url); // Parent & child pages stay active
  };

  const isParentActive = (title, url) =>
    openSection === title || pathname.startsWith(url);

  // State for open section - initially null to prevent hydration issues
  const [openSection, setOpenSection] = useState(null);
  useEffect(() => {
    // Load from localStorage after the component mounts (client-side)
    const storedSection = localStorage.getItem("openSection");
    if (storedSection) setOpenSection(storedSection);
  }, []);

  // Function to ensure only one section stays open
  const toggleSection = (title) => {
    setOpenSection((prev) => {
      const newState = prev === title ? null : title;
      localStorage.setItem("openSection", newState || "");
      return newState;
    });
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {/* Home Link */}
        <SidebarMenuItem className="m-1 rounded">
          <SidebarMenuButton
            asChild
            tooltip={homeItem.title}
            className={cn(
              "main-menu-item theme-text-color !rounded px-1 py-5 font-normal active:bg-sidebar-primary/5 active:text-sidebar-primary",
              isActiveUrl(homeItem.url) && ""
            )}
          >
            <Link href={homeItem.url}>
              <span
                className={cn(
                  "menu-icon flex !h-7 !w-7 items-center justify-center rounded p-1",
                  isActiveUrl(homeItem.url) && "theme-text-color"
                )}
              >
                {homeItem.icon && <homeItem.icon />}
              </span>
              <span>{homeItem.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {/* Sidebar Sections */}
        {items.map((item) => {
          const isOpen = openSection === item.title;
          const isActive = item.url && isParentActive(item.title, item.url);

          return (
            <Collapsible
              key={item.title}
              asChild
              open={isOpen}
              className="group/collapsible"
            >
              <SidebarMenuItem className="m-1 rounded">
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className={cn(
                      "theme-text-color main-menu-item !rounded px-1 py-5 font-normal",
                      isActive && "font-normal"
                    )}
                    tooltip={item.title}
                    onClick={() => toggleSection(item.title)}
                  >
                    {/* Always render the icon first */}
                    <span
                      className={cn(
                        "menu-icon flex !h-7 !w-7 flex-shrink-0 items-center justify-center rounded p-1",
                        isActive && "text-black"
                      )}
                    >
                      {item.icon && <item.icon />}
                    </span>

                    {/* Only show text if not collapsed */}
                    <span className="truncate">{item.title}</span>

                    {/* Hide chevron in collapsed mode */}
                    {openSection === item.title && state !== "collapsed" && (
                      <ChevronRight
                        className={cn(
                          "ml-auto transition-transform duration-200 text-red",
                          isOpen && "rotate-90"
                        )}
                      />
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub className="sub-menu-item px-2 py-2">
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem
                        key={subItem.title}
                        className="relative py-1"
                      >
                        {subItem.items ? (
                          <Collapsible asChild>
                            <>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="theme-text-color cursor-pointer !rounded font-normal">
                                  <div className="flex w-full items-center justify-between">
                                    <span>{subItem.title}</span>
                                    <ChevronRight className="ml-auto w-4 transition-transform duration-200 text-[#b52123]" />
                                  </div>
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="pl-4">
                                <SidebarMenuSub className="sub-menu-ul m-0 border-none">
                                  {subItem.items.map((thirdItem) => (
                                    <SidebarMenuSubItem
                                      key={thirdItem.title}
                                      className="relative py-1"
                                    >
                                      <SidebarMenuSubButton
                                        asChild
                                        className={cn(
                                          "theme-text-color cursor-pointer !rounded font-normal hover:text-sidebar-primary active:text-sidebar-primary",
                                          isActiveUrl(thirdItem.url) &&
                                          "font-normal text-sidebar-primary"
                                        )}
                                      >
                                        <Link href={thirdItem.url}>
                                          <span>{thirdItem.title}</span>
                                        </Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </>
                          </Collapsible>
                        ) : (
                          <SidebarMenuSubButton
                            asChild
                            className={cn(
                              "theme-text-color cursor-pointer !rounded font-normal hover:text-sidebar-primary active:text-sidebar-primary",
                              isActiveUrl(subItem.url) &&
                              "font-normal text-sidebar-primary"
                            )}
                          >
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        )}
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}



export const navBarcode = `
"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { routesUrl } from "../utils/routesUrl";

export default function NavMain({ homeItem, items }) {
  const { state } = useSidebar();
  const pathname = usePathname();
  const isActiveUrl = (url) => {
    if (url === routesUrl.adminPannel) return pathname === url; // Exact match for Home
    return pathname.startsWith(url); // Parent & child pages stay active
  };

  const isParentActive = (title, url) =>
    openSection === title || pathname.startsWith(url);

  // State for open section - initially null to prevent hydration issues
  const [openSection, setOpenSection] = useState(null);
  useEffect(() => {
    // Load from localStorage after the component mounts (client-side)
    const storedSection = localStorage.getItem("openSection");
    if (storedSection) setOpenSection(storedSection);
  }, []);

  // Function to ensure only one section stays open
  const toggleSection = (title) => {
    setOpenSection((prev) => {
      const newState = prev === title ? null : title;
      localStorage.setItem("openSection", newState || "");
      return newState;
    });
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {/* Home Link */}
        <SidebarMenuItem className="m-1 rounded">
          <SidebarMenuButton
            asChild
            tooltip={homeItem.title}
            className={cn(
              "main-menu-item theme-text-color !rounded px-1 py-5 font-normal active:bg-sidebar-primary/5 active:text-sidebar-primary",
              isActiveUrl(homeItem.url) && ""
            )}
          >
            <Link href={homeItem.url}>
              <span
                className={cn(
                  "menu-icon flex !h-7 !w-7 items-center justify-center rounded p-1",
                  isActiveUrl(homeItem.url) && "theme-text-color"
                )}
              >
                {homeItem.icon && <homeItem.icon />}
              </span>
              <span>{homeItem.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {/* Sidebar Sections */}
        {items.map((item) => {
          const isOpen = openSection === item.title;
          const isActive = item.url && isParentActive(item.title, item.url);

          return (
            <Collapsible
              key={item.title}
              asChild
              open={isOpen}
              className="group/collapsible"
            >
              <SidebarMenuItem className="m-1 rounded">
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className={cn(
                      "theme-text-color main-menu-item !rounded px-1 py-5 font-normal",
                      isActive && "font-normal"
                    )}
                    tooltip={item.title}
                    onClick={() => toggleSection(item.title)}
                  >
                    {/* Always render the icon first */}
                    <span
                      className={cn(
                        "menu-icon flex !h-7 !w-7 flex-shrink-0 items-center justify-center rounded p-1",
                        isActive && "text-black"
                      )}
                    >
                      {item.icon && <item.icon />}
                    </span>

                    {/* Only show text if not collapsed */}
                    <span className="truncate">{item.title}</span>

                    {/* Hide chevron in collapsed mode */}
                    {openSection === item.title && state !== "collapsed" && (
                      <ChevronRight
                        className={cn(
                          "ml-auto transition-transform duration-200 text-red",
                          isOpen && "rotate-90"
                        )}
                      />
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub className="sub-menu-item px-2 py-2">
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem
                        key={subItem.title}
                        className="relative py-1"
                      >
                        {subItem.items ? (
                          <Collapsible asChild>
                            <>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton className="theme-text-color cursor-pointer !rounded font-normal">
                                  <div className="flex w-full items-center justify-between">
                                    <span>{subItem.title}</span>
                                    <ChevronRight className="ml-auto w-4 transition-transform duration-200 text-[#b52123]" />
                                  </div>
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="pl-4">
                                <SidebarMenuSub className="sub-menu-ul m-0 border-none">
                                  {subItem.items.map((thirdItem) => (
                                    <SidebarMenuSubItem
                                      key={thirdItem.title}
                                      className="relative py-1"
                                    >
                                      <SidebarMenuSubButton
                                        asChild
                                        className={cn(
                                          "theme-text-color cursor-pointer !rounded font-normal hover:text-sidebar-primary active:text-sidebar-primary",
                                          isActiveUrl(thirdItem.url) &&
                                            "font-normal text-sidebar-primary"
                                        )}
                                      >
                                        <Link href={thirdItem.url}>
                                          <span>{thirdItem.title}</span>
                                        </Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </>
                          </Collapsible>
                        ) : (
                          <SidebarMenuSubButton
                            asChild
                            className={cn(
                              "theme-text-color cursor-pointer !rounded font-normal hover:text-sidebar-primary active:text-sidebar-primary",
                              isActiveUrl(subItem.url) &&
                                "font-normal text-sidebar-primary"
                            )}
                          >
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        )}
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
`