import React, {useState} from "react";
import {  Routes, Route, Link, useLocation } from "react-router-dom";
import Ecommerce from "../Projects/Ecommerce";
const TopNav = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <div>
        <nav className="w-full bg-slate-500 text-white  shadow">
            <div className="justify-between  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold">LOGO</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1  justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li>
                            <span class="group relative inline-block">
                                <li class="text-white">Blogs</li>
                                <ul class="absolute hidden pt-1 text-gray-700 group-hover:block">
                                <li>
                                <Link className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400" to="/blogs">JavaScript
                                </Link>                                     
                                </li>
                                </ul>
                            </span>
                            </li>
                            <li>
                            <span class="group relative inline-block">
                                <li class="text-white">
                                    Projects
                                    </li>
                                <ul class="absolute hidden pt-1 text-gray-700 group-hover:block">
                                <li>
                                <Link className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400" to="/projects">Ecommerce</Link>                                    
                                </li>
                                <li>
                                <Link className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400" to="/movies">Movie</Link>                                    
                                </li>  
                                <li>
                                <Link className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400" to="/todoapp">Todo App</Link>                                    
                                </li>  
                                <li>
                                <Link className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400" to="/inputForms">Form</Link>                                    
                                </li>   
                                <li>
                                <Link className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400" to="/crud">Crud</Link>                           
                                </li>   
                                </ul>
                            </span>
                            </li>     
                            
                            <li className="text-white">
                                <Link to="/aboutus">About Me</Link>
                            </li>                   
                          
                        </ul>
                       
                    </div>
                </div>
            </div>
        </nav>
        {/* <Routes>
          <Route exact path="/projects" element={<Ecommerce />} />
        </Routes> */}
       
        </div>
    );

}

export default TopNav;