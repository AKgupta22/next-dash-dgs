import CommonInputWithError from "@/components/CommonInputWithError";
import { FormikProps } from "formik";
import React from "react";

export interface eventType {
  event_type: string;
  title: string;
}

interface AddEventFormProps {
  formik: FormikProps<eventType>;
}

const AddEventForm = ({ formik }: AddEventFormProps) => {
  const { handleChange, errors, values, touched } = formik;

  return (
    <div className="flex max-w-md flex-col gap-4">
      <CommonInputWithError
        value={values.event_type}
        changeHandler={handleChange}
        touched={touched.event_type}
        errorText={errors.event_type}
        label="Event Type"
        name="event_type"
        type={null}
      />
      <p className="mb-2 text-xs">Type E for event or R for reminder</p>
      <CommonInputWithError
        value={values.title}
        changeHandler={handleChange}
        touched={touched.title}
        errorText={errors.title}
        label="Event Title"
        name="title"
        type={null}
      />
    </div>
  );
};

export default AddEventForm;
