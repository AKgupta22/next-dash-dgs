"use client";

import React from "react";
import SidebarComponent from "../Sidebar/Sidebar";

interface DashboardWrapProps {
  currentTab: number;
}

const DashboardWrap = ({
  children,
  currentTab,
}: React.PropsWithChildren<DashboardWrapProps>): React.JSX.Element => {
  return (
    <div className="h-screen flex">
      <SidebarComponent currentTab={currentTab} />
      <div className="h-full w-full dashboard-children">{children}</div>
    </div>
  );
};

export default DashboardWrap;
