import React from 'react'
import { Card, FormModal } from "../pages"

export const Insert = () => {
    return (
        <div className="w-full h-screen overflow-y-scroll ">
            <div className="w-full pt-4 px-5">
                <FormModal />
            </div>
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
                            <p className="font-bold text-md">
                                Pick a Cup
                            </p>
                            <p className='text-sm'>Priority: 1</p>

                            <p className="text-xs pt-2">
                                Requested Time: 16:00 / 09-07-2023
                            </p>
                        </div><br />

                        <div className='w-full'>
                            <p className="text-xs bg-green-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Completed
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
                            <p className="font-bold text-md">
                                Pick n Place
                            </p>
                            <p className='text-sm'>Priority: 4</p>

                            <p className="text-xs pt-2">
                                Requested Time: 16:00 / 09-07-2023
                            </p>
                        </div><br />

                        <div className='w-full'>
                            <p className="text-xs bg-green-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Completed
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
                                Pick n Place
                            </p>
                            <p className='text-sm'>Priority: 2</p>

                            <p className="text-xs pt-2">
                                Requested Time: 16:00 / 09-07-2023
                            </p>
                        </div><br />
                        <div className='w-full'>
                            <p className="text-xs bg-red-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Not Finished
                            </p>
                            <p className="text-xs bg-red-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Robot Out of Order
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}