"use client";

import DashboardWrap from "@/section/Dashboard/DashboardWrap";
import React from "react";
import CalenderGrid from "./components/CalenderGrid";
import CommonContentHeader from "@/components/CommonContentHeader";

const CalenderUI = (): React.JSX.Element => {
  return (
    <DashboardWrap currentTab={8}>
      <CommonContentHeader title="Calender UI" />
      <CalenderGrid />
    </DashboardWrap>
  );
};

export default CalenderUI;
