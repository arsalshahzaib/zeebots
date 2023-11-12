import React, { useState } from "react";

export const Modal = () => {
    const [isModalOpen, setModalOpen] = useState(true);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <div className="flex gap-2">
                            <div className="p-2 bg-[#cad7ba] rounded-md mb-4">
                                <p className="text-gray-700 mb-4">
                                    Embark on an Intuitive Journey
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Let our Robot Guide You to Seamless Task
                                    Success
                                </p>
                                <ul className="text-gray-700 mb-4">
                                    <li>- Download Reports</li>
                                    <li>- Update the Robot's Status</li>
                                    <li>- Create New Users</li>
                                    <li>- View Activity Report</li>
                                </ul>
                            </div>
                        </div>
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded-md"
                            onClick={closeModal}
                        >
                            Let's Go
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
