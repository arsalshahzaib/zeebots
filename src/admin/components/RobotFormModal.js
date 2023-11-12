import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const RobotFormModal = () => {
    const [isOpen, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    };
    const openModel = () => {
        setOpen(true);
    };

    return (
        <div>
            <div>
                <button
                    className="p-2 border-[1px] border-gray-300 rounded-lg float-right bg-gray-600 text-white 
                    transition duration-300"
                    onClick={openModel}
                >
                    Create Robot
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
                    <div className="bg-white p-8 rounded-lg shadow-md w-[30%]">
                        <h2 className="text-2xl font-bold mb-4">
                            Create a Robot
                        </h2>
                        <div className="">
                            <div className="p-2 mb-4">
                                <span className="text-gray-700">
                                    Robot Name
                                </span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="p-2  w-full border-b border-gray-950 focus:outline-none focus:border-b focus:border-blue-500"
                                />
                                <span className="text-gray-700">
                                    Robot Description
                                </span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Business Type"
                                    className="p-2  w-full border-b border-gray-950 focus:outline-none focus:border-b focus:border-blue-500"
                                />
                                <span className="text-gray-700">Status:</span>
                                <br />
                                <select
                                    name="status"
                                    id="status"
                                    className="p-2  w-full border-b border-gray-950 focus:outline-none focus:border-b focus:border-blue-500"
                                >
                                    <option value="default">Default</option>
                                    <option value="vacant">Vacant</option>
                                    <option value="occupied">Occupied</option>
                                    <option value="damaged">Damaged</option>
                                </select>
                            </div>
                        </div>
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded-md"
                            onClick={closeModal}
                        >
                            Create
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
