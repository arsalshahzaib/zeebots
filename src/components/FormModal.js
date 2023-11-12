import React, { useState } from "react";

export const FormModal = () => {
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
                    Create Task
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
                    <div className="bg-white p-8 rounded-lg shadow-md w-[30%]">
                        <h2 className="text-2xl font-bold mb-4">
                            Create a Task
                        </h2>
                        <div className="">
                            <div className="p-2 mb-4">
                                <span className="text-gray-700">
                                    Task Description
                                </span>
                                <br />
                                <input
                                    type="text"
                                    className="p-2  w-full border-b border-gray-950 focus:outline-none focus:border-b focus:border-blue-500"
                                />
                                <span className="text-gray-700">Priority</span>
                                <br />
                                <select
                                    name="priority"
                                    id="priority"
                                    className="w-full focus:outline-none focus:border-b focus:border-blue-500 border-b border-black p-2"
                                >
                                    <option value="default">Default</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <span className="text-gray-700">
                                    Robot Type
                                </span>
                                <br />
                                <select
                                    name="roboType"
                                    id="roboType"
                                    className="w-full focus:outline-none border-b border-black p-2 focus:border-b focus:border-blue-500"
                                >
                                    <option value="default">Default</option>
                                    <option value="UR10">UR10</option>
                                    <option value="URe5">URe5</option>
                                    <option value="Mobile Robot">
                                        Mobile Robot
                                    </option>
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
