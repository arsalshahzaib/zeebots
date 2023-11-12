import { Modal, Card } from "../pages";
import UR from "../assets/ur10png.png";
import { BsBatteryFull } from "react-icons/bs";
export const Home = () => {
    return (
        <div className="flex h-screen">
            <Modal />
            <div className="w-[20%] bg-gray-400 p-2">
                <p className="text-center text-xl font-bold pb-4">Overview</p>
                <hr />
                <ul className="p-2 text-center mt-7">
                    <li>
                        <strong>Today's Tasks</strong>
                        <br /> 55
                    </li>
                    <br />
                    <br />
                    <li>
                        <strong>Pending Tasks</strong>
                        <br /> 23
                    </li>
                    <br />
                    <br />
                    <li>
                        <strong>Completed Tasks</strong>
                        <br /> 64
                    </li>
                    <br />
                    <br />
                    <li>
                        <strong>Cancelled Tasks</strong>
                        <br /> 0
                    </li>
                </ul>
            </div>
            <div className="w-[60%] bg-gray-400 p-2 border-4 border-white">
                <p className="text-center text-xl font-bold pb-3">
                    Active Tasks
                </p>
                <hr />
                <div className="flex justify-center items-center w-full">
                    <table className="border-collapse border border-gray-400 mt-4 w-full">
                        <tr className="bg-gray-200">
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                88
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2">
                                Pick Glass
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 flex justify-center">
                                <p className="p-2 bg-blue-400 rounded-3xl">
                                    In Progress
                                </p>
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                UR10
                            </th>
                        </tr>
                        <tr className="bg-gray-200">
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                88
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2">
                                Pick My Bag
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 flex justify-center">
                                <p className="p-2 bg-slate-400 rounded-3xl">
                                    Not Started
                                </p>
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                UR10
                            </th>
                        </tr>
                        <tr className="bg-gray-200">
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                88
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2">
                                Pick my Wallet
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 flex justify-center">
                                <p className="p-2 bg-red-500 rounded-3xl">
                                    Blocked
                                </p>
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                UR10
                            </th>
                        </tr>
                        <tr className="bg-gray-200">
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                88
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2">
                                Pick Towel
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 flex justify-center">
                                <p className="p-2 bg-blue-400 rounded-3xl">
                                    In Progress
                                </p>
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                UR10
                            </th>
                        </tr>
                        <tr className="bg-gray-200">
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                88
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2">
                                Pick Waterpump
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 flex justify-center">
                                <p className="p-2 bg-blue-400 rounded-3xl">
                                    In Progress
                                </p>
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                UR10
                            </th>
                        </tr>
                        <tr className="bg-gray-200">
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                88
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2">
                                Pick Ranch
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 flex justify-center">
                                <p className="p-2 bg-green-600 rounded-3xl">
                                    Completed
                                </p>
                            </th>
                            <th className="border-4 border-gray-400 px-4 py-2 w-20">
                                UR10
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="w-[20%] p-2">
                <p className="text-center text-xl font-bold pb-4">
                    Active Robots
                </p>
                <hr />
                <div className="mt-2 flex flex-col items-center">
                    <Card width="w-60 bg-[#cad7ba]">
                        <img src={UR} />
                        <p>UR10</p>
                        <p className="text-center">
                            Battery Health: <BsBatteryFull className="inline" />
                        </p>
                        <p>Status: Occupied</p>
                    </Card>
                </div>
            </div>
        </div>
    );
};
