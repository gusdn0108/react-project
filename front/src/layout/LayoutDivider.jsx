import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { admin_menu, user_side_menu, main_menu } from "../common/menu";
import MainLayout from "./mainType/MainLayout";
import SideLayout from "./sideType/SideLayout";
const LayoutDivider = ({ children }) => {
    const location = useLocation();

    const [mainpath, setMainpath] = useState("main");
    const [menu, setMenu] = useState([])
    useEffect(() => {
        const mainpath = location.pathname.split("/")[1];
        if (mainpath === "admin") {
            setMainpath("side");
            setMenu(admin_menu)
        } else if (mainpath === "profile") {
            setMainpath("side");
            setMenu(user_side_menu)

        } else {
            setMainpath("main");
            setMenu(main_menu)
        }
        return () => {
            setMainpath("main");
        };
    }, [location]);

    switch (mainpath) {
        case "main":
            return <SideLayout menu={menu}>{children}</SideLayout>;
        case "side":
            return <SideLayout menu={menu}>{children}</SideLayout>;
        default:
            return <MainLayout>404</MainLayout>;
    }
};

export default LayoutDivider;