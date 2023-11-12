import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const FormModal = () => {
    const [isOpen, setOpen] = useState(false);
    const [show, setShow] = useState(false);

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
                    Create User
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
                    <div className="bg-white p-8 rounded-lg shadow-md w-[30%]">
                        <h2 className="text-2xl font-bold mb-4">
                            Create a User
                        </h2>
                        <div className="">
                            <div className="p-2 mb-4">
                                <span className="text-gray-700">Full Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="p-2  w-full border-b border-gray-950 focus:outline-none focus:border-b focus:border-blue-500"
                                />
                                <span className="text-gray-700">Business Type</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Business Type"
                                    className="p-2  w-full border-b border-gray-950 focus:outline-none focus:border-b focus:border-blue-500"
                                />
                                <span className="text-gray-700">Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full focus:outline-none focus:border-b focus:border-blue-500 border-b border-black p-2"
                                />

                                <span className="text-gray-700">Password</span>
                                <br />
                                <div className=" relative">
                                    <input
                                        type={!show ? "password" : "text"}
                                        placeholder="Password"
                                        className=" w-full py-2 focus:outline-none border-b border-b-black p-2 focus:border-b focus:border-blue-500"
                                    />
                                    <span
                                        className="absolute top-0 right-0 p-[11px]"
                                        onClick={() => setShow(!show)}
                                    >
                                        {!show ? (
                                            <AiOutlineEye className="text-black text-xl" />
                                        ) : (
                                            <AiOutlineEyeInvisible className="text-black text-xl" />
                                        )}
                                    </span>
                                </div>
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
