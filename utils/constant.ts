import {
    HiInbox,
    HiShoppingBag,
    HiHome
} from "react-icons/hi";
import { FaCalendarAlt, FaReact, FaBusinessTime } from "react-icons/fa";
import { HiMiniCube } from "react-icons/hi2"
import { PiClockAfternoonBold } from "react-icons/pi";

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