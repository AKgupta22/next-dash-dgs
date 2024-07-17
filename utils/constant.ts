import {
    HiInbox,
    HiShoppingBag,
    HiHome
} from "react-icons/hi";
import { FaCalendarAlt, FaReact, FaBusinessTime } from "react-icons/fa";
import { HiMiniCube } from "react-icons/hi2"
import { PiClockAfternoonBold } from "react-icons/pi";
import * as yup from 'yup'

export const sideBarItems = [
    {
        id: 1,
        name: "Home",
        icon: HiHome,
        subItems: null,
        ref: "/",
    },
    {
        id: 2,
        name: "Inbox",
        icon: HiInbox,
        subItems: null,
        ref: "",
    },
    {
        id: 3,
        name: "Work Order",
        icon: HiMiniCube,
        subItems: null,
        ref: "/work-order",
    },
    {
        id: 4,
        name: "Products",
        icon: HiShoppingBag,
        subItems: null,
        ref: "",
    },
    {
        id: 5,
        name: "Calender Type",
        icon: FaCalendarAlt,
        subItems: [
            {
                id: 6,
                name: "Main",
                icon: FaBusinessTime,
                ref: "/calender/main",
            },
            {
                id: 7,
                name: "Afternoon",
                icon: PiClockAfternoonBold,
                ref: ""
            },
            {
                id: 8,
                name: "UI",
                icon: FaReact,
                ref: "/calender/ui",
            },

        ]
    },
]

export const workOrderFormValidationSchema = yup.object({
    product_name: yup.string()
        .required('Product name is required')
        .min(3, 'Min 3 character is required')
    ,
    customer_name: yup.string()
        .required('Customer name is required')
        .min(3, 'Min 3 character is required')
    ,
    city: yup.string()
        .required('City name is required')
        .min(3, 'Min 3 character is required')
    ,
    price: yup.string()
        .required('Price is required')
        .matches(/^(?:[0-9]|[1-9][0-9]{0,3}|50000)$/, "Price must be between 0 and 50,000"),
    order_date: yup.string()
        .required('Order Date is required')
})

export const addEventFormValidationSchema = yup.object({
    event_type: yup.string()
        .required('Event or Reminder type is required').
        oneOf(['E', 'R'], 'Please enter E for event or R for reminder')
    ,
    title: yup.string()
        .required('Event or Reminder title is required')
        .min(3, 'Min 3 character is required')
})
