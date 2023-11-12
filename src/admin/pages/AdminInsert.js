import React from 'react'
import { Card, FormModal } from "../pages"

export const AdminInsert = () => {
    return (
        <div className="w-full h-screen overflow-y-scroll ">
            <div className="w-full pt-4 px-5">
                <FormModal />
            </div>
            <div className="w-full flex flex-wrap justify-center gap-2 p-7 container">
                <Card width="w-72 bg-[#cad7ba]">
                    <div className="p-3 items-center w-full">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">Cheezious</p>

                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Restaurant
                            </p>
                            <p className='text-sm'>admin@cheezious.com</p>
                            <p className="text-xs pt-2">
                                Created at: 16:00 / 09-07-2023
                            </p>
                        </div><br />

                        <div className='w-full'>
                            <p className="text-xs bg-green-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Active
                            </p>
                        </div>
                    </div>
                </Card>
                <Card width="w-72 bg-[#cad7ba]">
                    <div className="p-3 items-center w-full">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">Johny n Jugnus</p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Restaurant
                            </p>
                            <p className='text-sm'>admin@jnj.com</p>

                            <p className="text-xs pt-2">
                                Created at: 16:00 / 09-07-2023
                            </p>
                        </div><br />

                        <div className='w-full'>
                            <p className="text-xs bg-green-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                active
                            </p>
                        </div>
                    </div>
                </Card>
                <Card width="w-72 bg-[#cad7ba]">
                    <div className="p-3 items-center w-full">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">Hardees</p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Restaurant
                            </p>
                            <p className='text-sm'>admin@hardees.com</p>

                            <p className="text-xs pt-2">
                                Created at: 16:00 / 09-07-2023
                            </p>
                        </div><br />
                        <div className='w-full'>
                            <p className="text-xs bg-green-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                active
                            </p>

                        </div>
                    </div>
                </Card>
                <Card width="w-72 bg-[#cad7ba]">
                    <div className="p-3 items-center w-full">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">Tim Hortons</p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Coffee Shop
                            </p>
                            <p className='text-sm'>admin@timhortons.com</p>

                            <p className="text-xs pt-2">
                                Created at: 16:00 / 09-07-2023
                            </p>
                        </div><br />
                        <div className='w-full'>
                            <p className="text-xs bg-green-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                active
                            </p>

                        </div>
                    </div>
                </Card>
                <Card width="w-72 bg-[#cad7ba]">
                    <div className="p-3 items-center w-full">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">Jay Bees</p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Ice Cream Shop
                            </p>
                            <p className='text-sm'>admin@jbs.com</p>

                            <p className="text-xs pt-2">
                                Created at: 16:00 / 09-07-2023
                            </p>
                        </div><br />
                        <div className='w-full'>
                            <p className="text-xs bg-green-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                active
                            </p>

                        </div>
                    </div>
                </Card>
                <Card width="w-72 bg-[#b88282]">
                    <div className="p-3 items-center w-full">
                        <div className="flex justify-between w-full">
                            <p className="text-lg font-bold">Coca Cola</p>
                        </div>
                        <div className="w-full">
                            <p className="font-bold text-md">
                                Drinks
                            </p>
                            <p className='text-sm'>admin@cocacola.com</p>

                            <p className="text-xs pt-2">
                                Created at: 16:00 / 09-07-2023
                            </p>
                        </div><br />
                        <div className='w-full'>
                            <p className="text-xs bg-red-500 inline-block min-w-min border-[1px] border-gray-400 p-1 rounded">
                                Inactive
                            </p>

                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}