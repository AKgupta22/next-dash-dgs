"use client";

import DashboardWrap from "@/section/Dashboard/DashboardWrap";
import React, { useEffect, useState } from "react";
import WorkOrderTable from "./components/WorkOrderTable";
import CommonContentHeader from "@/components/CommonContentHeader";
import { Button } from "flowbite-react";
import { IoAddOutline } from "react-icons/io5";
import CommonModal from "@/components/CommonModal";
import WorkOrderForm from "./components/WorkOrderForm";
import { useFormik } from "formik";
import { workOrderFormValidationSchema } from "@/utils/constant";
import { dispatch } from "@/redux/store";
import {
  addWorkOrder,
  deleteWorkOrder,
  updateWorkOrder,
  workOrderStateType,
} from "@/redux/slices/workOrderSlice";
import { v4 as uuidv4 } from "uuid";

const WorkOrder = (): React.JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      id: "",
      product_name: "",
      customer_name: "",
      city: "",
      price: "",
      order_date: "",
    },
    validationSchema: workOrderFormValidationSchema,
    onSubmit: (values) => {
      if (editId) dispatch(updateWorkOrder(values));
      else {
        values.id = uuidv4();
        dispatch(addWorkOrder(values));
      }
      handleClearForm();
      setOpenModal(false);
    },
  });

  const handleClearForm = () => {
    formik.resetForm();
    setEditId("");
  };

  const handleClearDelete = () => {
    setDeleteId("");
  };

  const handleEditData = (workOrderData: workOrderStateType) => {
    setEditId(workOrderData.id);
    formik.setFieldValue("id", workOrderData.id);
    formik.setFieldValue("product_name", workOrderData.product_name);
    formik.setFieldValue("customer_name", workOrderData.customer_name);
    formik.setFieldValue("city", workOrderData.city);
    formik.setFieldValue("price", workOrderData.price);
    formik.setFieldValue("order_date", workOrderData.order_date);
    setOpenModal(true);
  };

  const handleDeleteData = (id: string) => {
    setOpenDeleteModal(true);
    setDeleteId(id);
  };

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
        <WorkOrderTable
          handleEditData={handleEditData}
          handleDeleteData={handleDeleteData}
        />
      </DashboardWrap>
      {openModal ? (
        <CommonModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          heading={`${editId ? "Update" : "Add"} Work Order`}
          color="success"
          submitHandler={formik.handleSubmit}
          submitTitle={`${editId ? "Update" : "Add"}`}
          clearHandler={handleClearForm}
        >
          <WorkOrderForm formik={formik} />
        </CommonModal>
      ) : null}

      {openDeleteModal ? (
        <CommonModal
          openModal={openDeleteModal}
          setOpenModal={setOpenDeleteModal}
          heading="Are you sure want to delete this item?"
          submitHandler={() => {
            dispatch(deleteWorkOrder(deleteId));
            setOpenDeleteModal(false);
          }}
          submitTitle="Yes"
          color="failure"
          clearHandler={handleClearDelete}
        >
          <p className="text-xs font-bold">
            This item will be deleted permanently
          </p>
        </CommonModal>
      ) : null}
    </>
  );
};

export default WorkOrder;
