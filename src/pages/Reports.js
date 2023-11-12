import React from "react";
import { Card } from "../pages";
import { BsCloudDownload } from "react-icons/bs";

export const Reports = () => {
    return (
        <>
            <div className="w-full flex flex-wrap justify-center gap-2 p-7 container">
                <Card width="w-72 bg-[#cad7ba]">
                    <div className="p-3 items-center w-full">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">Task 1:</p>
                            <p className="text-xs  inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                UR10
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">Pick Glass</p>
                            <p>Accuracy: 90%</p>
                            <p>Task Completion Time: 10min</p>
                            <p>Robo Type: Grappler</p>
                            <p className="text-xs pt-2">
                                Completed at: 16:00 / 09-07-2023
                            </p>
                        </div>
                        <br />

                        <div className="w-full flex justify-between">
                            <p className="text-xs bg-green-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Completed
                            </p>
                            <p className="text-xl p-1 rounded">
                                <BsCloudDownload />
                            </p>
                        </div>
                    </div>
                </Card>
                <Card width="w-72 bg-[#cad7ba]">
                    <div className="p-3 items-center w-full">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">Task 2:</p>
                            <p className="text-xs  inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Mobile Robot
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">Place the Dish</p>
                            <p>Accuracy: 90%</p>
                            <p>Task Completion Time: 10min</p>
                            <p>Robo Type: RoboRoamer</p>
                            <p className="text-xs pt-2">
                                Completed at: 16:00 / 09-07-2023
                            </p>
                        </div>
                        <br />

                        <div className="w-full flex justify-between">
                            <p className="text-xs bg-green-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Completed
                            </p>
                            <p className="text-xl p-1 rounded">
                                <BsCloudDownload />
                            </p>
                        </div>
                    </div>
                </Card>
                <Card width="w-72 bg-[#b88282]">
                    <div className="p-3 items-center w-full">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">Task 3:</p>
                            <p className="text-xs  inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                URe5
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Pick up the Wallet
                            </p>
                            <p>Accuracy: Nill</p>
                            <p>Task Completion Time: Nill</p>
                            <p>Robo Type: Nill</p>
                            <p className="text-xs pt-2">
                                Completed at: 16:00 / 09-07-2023
                            </p>
                        </div>
                        <br />
                        <div className="w-full flex justify-between">
                            <div>
                                <p className="text-xs bg-red-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                    Not Finished
                                </p>
                                <p className="text-xs bg-red-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                    Robot Out of Order
                                </p>
                            </div>
                            <p className="text-xl p-1 rounded">
                                <BsCloudDownload />
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
};
