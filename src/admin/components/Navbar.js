import { useState } from "react";
import { BiSolidUser } from "react-icons/bi"
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    return (
        <div className=" flex justify-between bg-gray-400 w-full p-2 shadow">
            <div className="">
                <ul className="flex gap-3">
                    <li className="px-4 py-1 bg-white rounded cursor-pointer" onClick={() => { navigate("/admin") }}>HOME</li>
                    <li className="px-4 py-1 bg-white rounded cursor-pointer" onClick={() => { navigate("/admin/insert") }}>INSERT</li>
                    <li className="px-4 py-1 bg-white rounded cursor-pointer" onClick={() => { navigate("/admin/reports") }}>Reports</li>
                    <li className="px-4 py-1 bg-white rounded cursor-pointer" onClick={() => { navigate("/admin/robots") }}>ROBOTS</li>
                </ul>
            </div>
            <div className="text-3xl me-[230px]">
                ZEBOTS
            </div>
            <div>
                <div>
                    <div
                        className="rounded-full cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    >
                        <ul>
                            <li className="px-4 py-1 text-2xl">
                                <BiSolidUser />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${!toggle ? "hidden" : ""} duration-400 `}>
                    <div className="absolute right-1 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div>
                            <a
                                className="block px-4 py-2 text-sm text-gray-700 transition duration-200 hover:bg-gray-100"
                                onClick={() => setToggle(!toggle)}
                            >
                                Admin
                            </a>
                        </div>
                        <hr />
                        <div>
                            <a
                                className="block px-4 cursor-pointer py-2 text-sm text-gray-700 transition duration-200 hover:bg-gray-100"
                                onClick={() => {
                                    setToggle(!toggle);
                                    navigate("/login");
                                }}
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
