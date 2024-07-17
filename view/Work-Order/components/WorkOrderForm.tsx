"use client";

import { workOrderStateType } from "@/redux/slices/workOrderSlice";
import { Label, TextInput } from "flowbite-react";
import { FormikProps } from "formik";
import React from "react";

interface WorkOrderFormProps {
  formik: FormikProps<workOrderStateType>;
}

const WorkOrderForm = ({ formik }: WorkOrderFormProps) => {
  const { handleChange, errors, values, touched } = formik;

 return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label color="gray" value="Product Name" />
        </div>
        <TextInput
          placeholder="Enter product name"
          color="gray"
          name="product_name"
          value={values.product_name}
          onChange={handleChange}
          helperText={
            touched.product_name && errors.product_name ? (
              <p className="text-xs text-red-600">
                {formik.errors.product_name}
              </p>
            ) : null
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label color="gray" value="Customer Name" />
        </div>
        <TextInput
          placeholder="Enter customer name"
          color="gray"
          name="customer_name"
          value={values.customer_name}
          onChange={handleChange}
          helperText={
            touched.customer_name && errors.customer_name ? (
              <p className="text-xs text-red-600">
                {formik.errors.customer_name}
              </p>
            ) : null
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label color="gray" value="City" />
        </div>
        <TextInput
          placeholder="Enter city"
          color="gray"
          name="city"
          value={values.city}
          onChange={handleChange}
          helperText={
            touched.city && errors.city ? (
              <p className="text-xs text-red-600">{formik.errors.city}</p>
            ) : null
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label color="gray" value="Price" />
        </div>
        <TextInput
          placeholder="Enter price"
          color="gray"
          name="price"
          value={values.price}
          onChange={handleChange}
          helperText={
            touched.price && errors.price ? (
              <p className="text-xs text-red-600">{formik.errors.price}</p>
            ) : null
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label color="gray" value="Order Date" />
        </div>
        <TextInput
          color="gray"
          name="order_date"
          type="date"
          value={values.order_date}
          onChange={formik.handleChange}
          helperText={
            touched.order_date && errors.order_date ? (
              <p className="text-xs text-red-600">{formik.errors.order_date}</p>
            ) : null
          }
        />
      </div>
    </div>
  );
};

export default WorkOrderForm;
