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
import ProfilePic from '../../assets/images/profilepic.png'
import AddUser from "../Users/UserIndex";
import LoginIndex from "../Login/LoginIndex";
import Login from "../Login/Login";
import ContextApp from "../ContextApi/ContextApp";
import { ColorContext } from "../Contextapitwo/ColorContext";
// import Index from '../Context/ContextIndex'
import ContextApiTwo from "../Contextapitwo/ContextApiTwo";

const LeftSideBar = () => {
  const location = useLocation();
  const [ showDrodownMenu, setShowDropdownMenu] = useState(true);

  const refreshPage =() => {
    setShowDropdownMenu(!showDrodownMenu)
    // window.location.reload(true);
  }

    return (
     
      <>
<div class="grid grid-flow-row-dense grid-cols-10 grid-rows-1 ...">
  <div class="col-span-2">
      
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
                  <Link to="/aboutus" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span class="flex-1 ml-3 whitespace-nowrap">Experience</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span class="flex-1 ml-3 whitespace-nowrap">Education</span>

                    </a>
                  </li> */}
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
                      <span class="flex-1 ml-3 whitespace-nowrap">
                        <Link to="/adduser">Sign Up</Link>                        
                        </span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
  </div>

  <div className="col-start-3 col-span-12 ...">
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
            <Route exatc path="/adduser"  element={ <AddUser /> } />
            <Route exatc path="/userlogin"  element={ <Login /> } />  
            <Route exatc path="/contextapi"  element={ <ContextApp /> } />              
          </Routes>
  </div>
</div>
      
        </>

    )

}

export default LeftSideBar;