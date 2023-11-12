import { Outlet } from "react-router-dom";
import { Menubar } from "../pages";

export const Layout = () => {
    return (
        <>
            <div className="">
                <Menubar />
                <Outlet />
            </div>
        </>
    );
};