import React, { useState } from "react";
import { Card } from "../pages";
import { BsCloudDownload } from "react-icons/bs";

export const AdminReports = () => {
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
        <>
            <div className="w-full flex h-screen">
                <div className="w-[20%] bg-gray-400 p-2">
                    <p className="text-center text-xl font-bold pb-4">
                        Companies
                    </p>
                    <hr />
                    <ul className="p-2 text-center mt-7">
                        {data.map((company) => (
                            <li
                                key={company.Company}
                                className={`p-2 w-full cursor-pointer hover:bg-slate-600 text-white rounded my-2 ${
                                    selectedCompany === company.Company
                                        ? "bg-slate-600"
                                        : "bg-gray-500"
                                }`}
                                onClick={() =>
                                    setSelectedCompany(company.Company)
                                }
                            >
                                {company.Company}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[80%]  p-2 border-4 border-white">
                    <p className="text-center text-xl font-bold pb-3">
                        Reports
                    </p>
                    <hr />
                    {selectedCompanyData && (
                        <div className="flex gap-4 justify-center items-center flex-wrap w-full mt-10">
                            <Card width="w-96 p-4 my-5">
                                <strong className="flex justify-between items-center w-full">
                                    <span>
                                        Today's Tasks:&nbsp;
                                        {selectedCompanyData["Today's Tasks"]}
                                    </span>
                                    <span>
                                        <BsCloudDownload />
                                    </span>
                                </strong>
                            </Card>
                            <Card width="w-96 p-4 my-5">
                                <strong className="flex justify-between items-center w-full">
                                    <span>
                                        Pending Tasks:&nbsp;
                                        {selectedCompanyData["Pending Tasks"]}
                                    </span>
                                    <span>
                                        <BsCloudDownload />
                                    </span>
                                </strong>
                            </Card>
                            <Card width="w-96 p-4 my-5">
                                <strong className="flex justify-between items-center w-full">
                                    <span>
                                        Completed Tasks:&nbsp;
                                        {selectedCompanyData["Completed Tasks"]}
                                    </span>
                                    <span>
                                        <BsCloudDownload />
                                    </span>
                                </strong>
                            </Card>
                            <Card width="w-96 p-4 my-5">
                                <strong className="flex justify-between items-center w-full">
                                    <span>
                                        Cancelled Tasks:&nbsp;
                                        {selectedCompanyData["Cancelled Tasks"]}
                                    </span>
                                    <span>
                                        <BsCloudDownload />
                                    </span>
                                </strong>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
