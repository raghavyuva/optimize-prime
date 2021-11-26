import {useState} from "react";
import "./patterns.css";
import { ReactComponent as Logo } from "./logo.svg";
import React from "react";

export let Navbar = () => {

    const [nbo,setnbo] = useState(true)

    return(
        <div className="min-h-full" >
            <nav className="flex items-center justify-between flex-wrap bg-gradient-to-tr from-green-900 via-purple-800 to-green-700  p-2">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Logo className="h-12 w-12 mr-5 animate-pulse md:hidden"></Logo>
                    <span className="font-bold text-2xl tracking-tight ">Cipher Control Panel</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        id="navbar-btn"
                        onClick={() => setnbo(!nbo)}>
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>

                </div>
                <div className={`w-full ${ nbo ? 'hidden' : 'block'} flex-grow lg:flex lg:items-center lg:w-auto`} id="navbar">
                        <button
                            className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                            <svg className="w-4 h-4 mr-3 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                            <span>With icon</span>
                        </button>
                </div>

            </nav>



        </div>





    )
}

