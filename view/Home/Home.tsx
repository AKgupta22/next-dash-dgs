"use-client";

import DashboardWrap from "@/section/Dashboard/DashboardWrap";
import React from "react";

const HomeView = (): React.JSX.Element => {
  return (
    <DashboardWrap currentTab={1}>
      <h3>This is HomeView</h3>
    </DashboardWrap>
  );
};

export default HomeView;
