"use client";

import CommonContentHeader from "@/components/CommonContentHeader";
import DashboardWrap from "@/section/Dashboard/DashboardWrap";
import React from "react";

const HomeView = (): React.JSX.Element => {
  return (
    <DashboardWrap currentTab={1}>
      <CommonContentHeader title="This is Home" />
    </DashboardWrap>
  );
};

export default HomeView;
