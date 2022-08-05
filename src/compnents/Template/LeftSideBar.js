import React, { useState } from "react";
import {  Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "../Profile/Home";
import AboutUs from "../Profile/AboutUs";
import Skills from "../Profile/Skills";
import Blog from "../Profile/Blog";
import Projects from "../Profile/Projects";
import MoviesList from "../Movies/MoviesApp";
import BasicForm from "../Forms/BasicForm";
import SimpleInput from "../Forms/SimpleInput";
import Todoapp from "../Todoapp/Index";
import HomeCrud from "../crud/Home";
import CreateCrude from "../crud/Create";
import BlogIndex from "../Blogs/BlogIndex";
import VariableDetailScope from "../Blogs/Javascript/VariableDetailScope";
import JavascriptObject from "../Blogs/Javascript/JavascriptObject";
import JavascriptArray from "../Blogs/Javascript/JavascriptArray";
import ProfilePic from '../../assets/images/profle2.jpg'
const LeftSideBar = () => {
  const location = useLocation();
  const [ showDrodownMenu, setShowDropdownMenu] = useState(true);

  const refreshPage =() => {
    setShowDropdownMenu(!showDrodownMenu)
    // window.location.reload(true);
  }

    return (
     
      <>
<div class="flex flex-wrap">

  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
  <aside className="w-64 hidden md:block" aria-label="Sidebar">

          <div class="flex flex-wrap ml-10">
          <div class="relative w-96 h-36">
            <img src={ProfilePic} alt="..." className="rounded-full border-4 border-white dark:border-gray-800 dark:outline-gray-800 w-36 " />
          </div>
        </div>

              <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul class="space-y-2" onClick={refreshPage}>
                <li>
                    <Link to="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span class="ml-3">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutus" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span class="ml-3">About Me</span>
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
                    <Link to="/skills" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                      <span class="flex-1 ml-3 whitespace-nowrap">Skills</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                      <span class="flex-1 ml-3 whitespace-nowrap">Contact</span>
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
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-5/6 mb-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/movies" element={<MoviesList />} />
            <Route exact path="/inputForms" element={<SimpleInput />} />
            <Route exact path="/todoapp" element={<Todoapp />} />
            <Route exact path="/crud" element={<HomeCrud />} />
            <Route exact path="/createCrud" element={<CreateCrude />} />
            <Route exact path="/blogs" element={<BlogIndex />} />
            <Route exact path="/variableDetailScope" element={ <VariableDetailScope /> } />
            <Route exatc path="/JavascriptObject"  element={ <JavascriptObject /> } />
            <Route exatc path="/javascriptarray"  element={ <JavascriptArray /> } />
            
            
            
          </Routes>
  </div>
</div>



      <div class="flex ...">
      <div class="w-1/6 ... ">
      

      </div>

        <div class="w-5/6 ...">
       

        </div>
    </div>
      
        </>

    )

}

export default LeftSideBar;