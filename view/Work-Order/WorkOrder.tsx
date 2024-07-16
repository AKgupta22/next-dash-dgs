"use client";

import DashboardWrap from "@/section/Dashboard/DashboardWrap";
import React, { useState } from "react";
import WorkOrderTable from "./components/WorkOrderTable";
import CommonContentHeader from "@/components/CommonContentHeader";
import { Button } from "flowbite-react";
import { IoAddOutline } from "react-icons/io5";
import CommonModal from "@/components/CommonModal";

const WorkOrder = (): React.JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <DashboardWrap currentTab={3}>
        <CommonContentHeader title="Work Order" />
        <div className="flex justify-end">
          <Button className="mb-4" onClick={() => setOpenModal(true)}>
            <span className="mr-2 text-xl font-bold text-white">
              <IoAddOutline />
            </span>
            Add
          </Button>
        </div>
        <WorkOrderTable />
      </DashboardWrap>
      {openModal ? (
        <CommonModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          heading="Add Work Order"
          color="success"
          submitHandler={() => {}}
          submitTitle="Add"
        >
          <div>form</div>
        </CommonModal>
      ) : null}
    </>
  );
};

export default WorkOrder;
