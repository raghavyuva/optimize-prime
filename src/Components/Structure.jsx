import React from 'react'
import { HiLogout } from 'react-icons/hi'

function Structure({
    Toggle,
    setToggle,
    sidebarContents
}) {
    return (
        <div>
            <div className=" shadow bg-base-200 drawer drawer-mobile h-screen">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col items-center justify-center drawer-content">
                    <label htmlFor="my-drawer-2" className="mb-4 btn btn-primary drawer-button lg:hidden">open menu</label>
                    <div className="hidden text-xs text-center lg:block">Menu is always open on desktop size.

                    </div>
                    <div className="text-xs text-center lg:hidden">Menu can be toggled on mobile size.

                    </div>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" />
                    <ul className=" p-4 overflow-y-auto w-20 bg-gray-900 text-base-content ">
                        <div className='justify-between flex flex-col '>
                            <div>
                                {
                                    sidebarContents && sidebarContents.map((content) => {
                                        return (
                                            <div className=''>
                                                <div className='p-2 my-6 flex  flex-col cursor-pointer  justify-center rounded-md '>
                                                    <content.Icon className='text-white' size={25} />
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className=''>
                                <HiLogout color='white' />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Structure
