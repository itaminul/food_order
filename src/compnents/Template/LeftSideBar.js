import React, { useState } from "react";
import {  Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "../Profile/Home";
import AboutUs from "../Profile/AboutUs";
const LeftSideBar = () => {
  const location = useLocation();
  const [ showDrodownMenu, setShowDropdownMenu] = useState(true);

  const refreshPage =() => {
    setShowDropdownMenu(!showDrodownMenu)
    // window.location.reload(true);
  }

    return (
     
      <>
      <div>
        <div class="grid grid-cols-5 gap-4">
          <div>
            <aside class="w-64" aria-label="Sidebar">
              <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul class="space-y-2" onClick={refreshPage}>
                <li>
                    <Link to="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span class="ml-3">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutus" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span class="ml-3">About Us</span>
                    </Link>
                  </li>
                  {/* <li>
       <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example"
       onClick={() => setShowDropdownMenu(!showDrodownMenu)}
       >
             <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>E-commerce</span>
             <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
             
       </button>
       {showDrodownMenu &&

       <ul  id="dropdown-example" class="py-2 space-y-2">
             <li>
                <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
             </li>
             <li>
                <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
             </li>
             <li>
                <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
             </li>
       </ul>
}

    </li> */}
                  <li>
                  <Link to="/aboutus" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span class="flex-1 ml-3 whitespace-nowrap">Experience</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                      <span class="flex-1 ml-3 whitespace-nowrap">Education</span>

                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                      <span class="flex-1 ml-3 whitespace-nowrap">Skills</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                      <span class="flex-1 ml-3 whitespace-nowrap">Interest</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                      <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                      <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

          </div>

          <div className="flex w-96">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
        </Routes>


          </div>
        </div>

      </div>
        </>

    )

}

export default LeftSideBar;