"use client";

import DashboardWrap from "@/section/Dashboard/DashboardWrap";
import React, { useState } from "react";
import WorkOrderTable from "./components/WorkOrderTable";
import CommonContentHeader from "@/components/CommonContentHeader";
import { Button } from "flowbite-react";
import { IoAddOutline } from "react-icons/io5";
import CommonModal from "@/components/CommonModal";
import WorkOrderForm from "./components/WorkOrderForm";
import { useFormik } from "formik";
import { workOrderFormValidationSchema } from "@/utils/constant";
import { dispatch } from "@/redux/store";
import { addWorkOrder } from "@/redux/slices/workOrderSlice";
import { v4 as uuidv4 } from "uuid";

const WorkOrder = (): React.JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      product_name: "",
      customer_name: "",
      city: "",
      price: "",
      order_date: "",
    },
    validationSchema: workOrderFormValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addWorkOrder(values));
      resetForm();
      setOpenModal(false);
    },
  });

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
          submitHandler={formik.handleSubmit}
          submitTitle="Add"
          clearForm={formik.resetForm}
        >
          <WorkOrderForm formik={formik} />
        </CommonModal>
      ) : null}
    </>
  );
};

export default WorkOrder;
