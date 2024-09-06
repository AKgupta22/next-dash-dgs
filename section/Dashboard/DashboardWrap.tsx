"use client";

import React, { Suspense } from "react";
import SidebarComponent from "../Sidebar/Sidebar";

interface DashboardWrapProps {
  currentTab: number;
}

const DashboardWrap = ({
  children,
  currentTab,
}: React.PropsWithChildren<DashboardWrapProps>): React.JSX.Element => {
  return (
    <Suspense>
      <div className="h-screen flex">
        <SidebarComponent currentTab={currentTab} />
        <div className="h-full w-full dashboard-children">{children}</div>
      </div>
    </Suspense>
  );
};

export default DashboardWrap;
