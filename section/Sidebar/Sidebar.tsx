"use client";

import { CustomFlowbiteTheme, Sidebar } from "flowbite-react";
import React, { useEffect, useState, Suspense } from "react";
import ToggleButton from "./components/ToggleButton";
import { sideBarItems } from "@/utils/constant";
import { useRouter, useSearchParams } from "next/navigation";

interface SidebarComponentProps {
  currentTab: number;
}

const customSideBarTheme: CustomFlowbiteTheme["sidebar"] = {
  item: {
    base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer",
  },
};

const SidebarComponent = ({
  currentTab,
}: SidebarComponentProps): React.JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [expandedItem, setExpandedItem] = useState<number>(0);

  const router = useRouter();
  const query = useSearchParams();

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  useEffect(() => {
    const expandedTab = query.get("expand");
    if (expandedTab) {
      const expandedTabId = parseInt(expandedTab);
      setExpandedItem(expandedTabId);
    }
  }, []);

  return (
    <Suspense>
      <Sidebar collapsed={isCollapsed} theme={customSideBarTheme}>
        <ToggleButton isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {sideBarItems.map((sidebarItem) =>
              sidebarItem.subItems ? (
                <Sidebar.Collapse
                  icon={sidebarItem.icon}
                  label={sidebarItem.name}
                  key={sidebarItem.id}
                  open={expandedItem === sidebarItem.id}
                >
                  {Array.isArray(sidebarItem.subItems) &&
                    sidebarItem.subItems.map((subItem) => (
                      <Sidebar.Item
                        key={subItem.id}
                        icon={subItem.icon}
                        active={currentTab === subItem.id}
                        onClick={() =>
                          router.push(subItem.ref + `?expand=${sidebarItem.id}`)
                        }
                      >
                        {subItem.name}
                      </Sidebar.Item>
                    ))}
                </Sidebar.Collapse>
              ) : (
                <Sidebar.Item
                  key={sidebarItem.id}
                  icon={sidebarItem.icon}
                  active={currentTab === sidebarItem.id}
                  onClick={() => router.push(sidebarItem.ref)}
                >
                  {sidebarItem.name}
                </Sidebar.Item>
              )
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </Suspense>
  );
};

export default SidebarComponent;
