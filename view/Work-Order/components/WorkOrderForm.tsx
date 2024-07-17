import CommonInputWithError from "@/components/CommonInputWithError";
import { workOrderStateType } from "@/redux/slices/workOrderSlice";
import { FormikProps } from "formik";
import React from "react";

interface WorkOrderFormProps {
  formik: FormikProps<workOrderStateType>;
}

const WorkOrderForm = ({ formik }: WorkOrderFormProps) => {
  const { handleChange, errors, values, touched } = formik;

  return (
    <div className="flex max-w-md flex-col gap-4">
      <CommonInputWithError
        value={values.product_name}
        changeHandler={handleChange}
        touched={touched.product_name}
        errorText={errors.product_name}
        label="Product Name"
        name="product_name"
        type={null}
      />
      <CommonInputWithError
        value={values.customer_name}
        changeHandler={handleChange}
        touched={touched.customer_name}
        errorText={errors.customer_name}
        label="Customer Name"
        name="customer_name"
        type={null}
      />
      <CommonInputWithError
        value={values.city}
        changeHandler={handleChange}
        touched={touched.city}
        errorText={errors.city}
        label="City"
        name="city"
        type={null}
      />
      <CommonInputWithError
        value={values.price}
        changeHandler={handleChange}
        touched={touched.price}
        errorText={errors.price}
        label="Price"
        name="price"
        type={null}
      />
      <CommonInputWithError
        value={values.order_date}
        changeHandler={handleChange}
        touched={touched.order_date}
        errorText={errors.order_date}
        label="Order Date"
        name="order_date"
        type="date"
      />
    </div>
  );
};

export default WorkOrderForm;
