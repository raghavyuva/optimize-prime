import React from 'react'
import { HiLogout } from 'react-icons/hi'
import FeaturedStats from './FeaturedStats'
import ListOfUsers from './ListOfUsers'
import { Navbar } from './Navbar'
import PromotionalBanner from './PromotionalBanner'
import { ReactComponent as Logo } from "./logo.svg";
import WelcomeBanner from './WelcomeBanner'
function Structure({
    Toggle,
    setToggle,
    sidebarContents,
    Components
}) {
    return (
        <div className=" shadow bg-primary-background drawer drawer-mobile h-full" >
            <input id="my-drawer-2 "
                type="checkbox"
                className="drawer-toggle"
                onClick={() => { setToggle(!Toggle) }}
                checked={Toggle}
                readOnly
            />
            <div className="flex flex-col  drawer-content overflow-hidden p-0  ">
                <div className=''>
                    <Navbar
                        sToggle={setToggle}
                        Togglest={Toggle}

                    />
                </div>
                <div className='p-5'>
                    <WelcomeBanner

                    />
                   

                    <div className={` 'grid-cols-2 lg:grid   flex flex-col '} overflow-hidden `}

                    >
                        {
                            Components?.length > 0 &&
                            Components?.map((Components) => (
                                <Components.Component  />
                            ))
                        }
                    </div>
                    <PromotionalBanner />
                </div>
            </div>
            <div className="drawer-side h-screen overflow-hidden" >
                <label for="my-drawer-2" className="drawer-overlay" ></label>
                <ul className="menu  overflow-hidden w-50 bg-gradient-to-bl from-blue-900 via-gray-800 to-green-900  shadow-lg text-gray-50  ">

                    <div className='justify-between flex flex-col '>
                        <div>
                            <div className="flex flex-row justify-between">
                                <Logo className="h-24 w-24 m-8 animate-pulse"/>
                                <button className="m-2 lg:hidden " onClick={() => { setToggle(!Toggle) }}>
                                    <svg class=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>


                            {
                                sidebarContents && sidebarContents.map((content) => {
                                    return (
                                        <div className='border-solid'>
                                            <div className='p-2 my-6 mt-12 flex  flex-row cursor-pointer mx-4   rounded-md '>
                                                <content.Icon className='text-white' size={25} />
                                                <span className='ml-4  capitalize'>
                                                    {content.label}
                                                </span>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Structure
