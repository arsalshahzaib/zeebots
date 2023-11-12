import { Outlet } from "react-router-dom";
import { Navbar } from "../admin/pages";

export const AdminLayout = () => {
    return (
        <>
            <div>
                <Navbar />
                <Outlet />
            </div>
        </>
    );
};