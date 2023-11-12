import { Modal, Card } from "../pages";
import UR from "../../assets/ur10png.png";
import { BsBatteryFull } from "react-icons/bs";
import React, { useState } from "react";
export const AdminHome = () => {
    const initialCompany = "Cheezious";
    const [selectedCompany, setSelectedCompany] = useState(initialCompany);
    const data = [
        {
            Company: "Cheezious",
            "Today's Tasks": 55,
            "Pending Tasks": 23,
            "Completed Tasks": 70,
            "Cancelled Tasks": 0,
        },
        {
            Company: "Johny n Jugnus",
            "Today's Tasks": 78,
            "Pending Tasks": 34,
            "Completed Tasks": 98,
            "Cancelled Tasks": 3,
        },
        {
            Company: "Hardees",
            "Today's Tasks": 64,
            "Pending Tasks": 12,
            "Completed Tasks": 44,
            "Cancelled Tasks": 7,
        },
        {
            Company: "Tim Hortons",
            "Today's Tasks": 83,
            "Pending Tasks": 44,
            "Completed Tasks": 99,
            "Cancelled Tasks": 4,
        },
        {
            Company: "Jay Bees",
            "Today's Tasks": 55,
            "Pending Tasks": 23,
            "Completed Tasks": 70,
            "Cancelled Tasks": 0,
        },
    ];
    const selectedCompanyData = data.find(
        (company) => company.Company === selectedCompany
    );
    return (
        <div className="flex h-screen">
            <Modal />
            <div className="w-[20%] bg-gray-400 p-2">
                <p className="text-center text-xl font-bold pb-4">Companies</p>
                <hr />
                <ul className="p-2 text-center mt-7">
                    {data.map((company) => (
                        <li
                            key={company.Company}
                            className={`p-2 w-full cursor-pointer hover:bg-slate-600 text-white rounded my-2 ${selectedCompany === company.Company
                                ? "bg-slate-600"
                                : "bg-gray-500"
                                }`}
                            onClick={() => setSelectedCompany(company.Company)}
                        >
                            {company.Company}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-[60%]  p-2 border-4 border-white">
                <p className="text-center text-xl font-bold pb-3">Overview</p>
                <hr />
                {selectedCompanyData && (
                    <div className="flex gap-4 justify-center items-center flex-wrap w-full mt-10">
                        <Card width="w-96 p-4 my-5">
                            <strong>
                                Today's Tasks:&nbsp;
                                {selectedCompanyData["Today's Tasks"]}
                            </strong>
                        </Card>
                        <Card width="w-96 p-4 my-5">
                            <strong>
                                Pending Tasks:&nbsp;
                                {selectedCompanyData["Pending Tasks"]}
                            </strong>
                        </Card>
                        <Card width="w-96 p-4 my-5">
                            <strong>
                                Completed Tasks:&nbsp;
                                {selectedCompanyData["Completed Tasks"]}
                            </strong>
                        </Card>
                        <Card width="w-96 p-4 my-5">
                            <strong>
                                Cancelled Tasks:&nbsp;
                                {selectedCompanyData["Cancelled Tasks"]}
                            </strong>
                        </Card>
                    </div>
                )}
            </div>
            <div className="w-[20%] p-2">
                <p className="text-center text-xl font-bold pb-4">
                    Active Robots
                </p>
                <hr />
                <div className="mt-2 flex flex-col items-center">
                    <Card width="w-60 bg-[#cad7ba]">
                        <img src={UR} alt="robo img" />
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
