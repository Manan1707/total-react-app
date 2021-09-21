import React from 'react';
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: "Inventories",
        path: "/main",
        icon: <FiIcons.FiBox />,
        cName: "nav-text"
    },
    {
        title: "Orders",
        path: "/inventory/order",
        icon: <FiIcons.FiTruck />,
        cName: "nav-text"
    },
    {
        title: "Analytics",
        path: "/inventory/analytics",
        icon: <BiIcons.BiBarChartAlt2 />,
        cName: "nav-text"
    },
    {
        title: "Reports",
        path: "/inventory/report",
        icon: <FiIcons.FiInbox />,
        cName: "nav-text"
    }
];