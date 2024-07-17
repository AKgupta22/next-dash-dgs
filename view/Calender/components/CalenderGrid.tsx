"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer, SlotInfo } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CommonModal from "@/components/CommonModal";
import AddEventForm from "./AddEventForm";
import { useFormik } from "formik";
import { addEventFormValidationSchema } from "@/utils/constant";
import { dispatch } from "@/redux/store";
import { addEvent, eventStateType } from "@/redux/slices/eventSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

const localizer = momentLocalizer(moment);

const CalenderGrid = (): React.JSX.Element => {
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<SlotInfo | null>(null);
  const calenderData = useSelector((state: RootState) => state.events);

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    setSelectedSlot(slotInfo);
    setOpenModal(true);
  };

  const handleClearSlot = () => {
    setSelectedSlot(null);
    formik.resetForm();
  };

  const eventPropGetter = (event: eventStateType) => {
    let backgroundColor = "#ff9900";
    if ((event.event_type === "R")) backgroundColor = "#ff0000";

    return {
      style: {
        backgroundColor,
      },
    };
  };

  const formik = useFormik({
    initialValues: {
      event_type: "E",
      title: "",
    },
    validationSchema: addEventFormValidationSchema,
    onSubmit: (values) => {
      const paylaod = {
        start: selectedSlot?.start,
        end: selectedSlot?.end,
        ...values,
      };
      dispatch(addEvent(paylaod));
      handleClearSlot();
      setOpenModal(false);
    },
  });

  return (
    <>
      <div>
        <Calendar
          localizer={localizer}
          events={calenderData}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          views={["month"]}
          defaultView="month"
          date={date}
          selectable
          onSelectSlot={handleSelectSlot}
          onNavigate={(date) => {
            setDate(new Date(date));
          }}
          eventPropGetter={eventPropGetter}
        />
      </div>
      {openModal ? (
        <CommonModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          heading="Add Event OR Reminder"
          color="success"
          submitHandler={formik.handleSubmit}
          submitTitle="Save"
          clearHandler={handleClearSlot}
        >
          <AddEventForm formik={formik} />
        </CommonModal>
      ) : null}
    </>
  );
};

export default CalenderGrid;
