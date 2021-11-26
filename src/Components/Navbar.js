import {useState} from "react";
import "../patterns.css"
import {HiHome, HiInformationCircle, HiThumbUp} from "react-icons/all";

export let Navbar = () => {

    return(
        <div className="min-h-full" >
            <nav className="pattern1  bg-gradient-to-r from-purple-500 via-purple-300 to-blue-500 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between align-middle h-20">
                            <div className="flex-shrink-0">
                              <p className=" bg-gradient-r from-gray-800 to-gray-400  z-50 text-2xl text-gray-400 font-sans font-bold"> Cipher Control Panel</p>
                            </div>
                                <div className="ml-10 items-baseline space-x-4 ">

                                    <a href="#"
                                        className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-2 px-5 rounded-md text-md inline-flex items-center gap-1">
                                        <HiHome/>
                                        <span>Home</span>
                                    </a>

                                    <a href="#"
                                       className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-2 px-5 rounded-md text-md inline-flex items-center gap-1">
                                        <HiInformationCircle/>
                                        <span>About</span>
                                    </a>
                                    <a href="#"
                                       className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-2 px-5 rounded-md text-md inline-flex items-center gap-1">
                                        <HiThumbUp/>
                                        <span>Donate</span>
                                    </a>
                                </div>
                    </div>
                </div>
            </nav>



            <header className="bg-gradient-to-r from-purple-400 to-blue-400 shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
        </div>
    )
}
