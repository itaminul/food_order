import Create from "./Create";
import Edit from "./Edit";
import array from "./array";
import {  Routes, Route, Link, useNavigate } from "react-router-dom";
const Home = () => {
    let history = useNavigate();
    function setID(id,name,age){
        localStorage.setItem('id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
      }
    

     
    return(
        <>
       
          {/* {console.log(array.Name)} */}
          {array.map((itemName) => {
              <div className="mb-6 mt-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {itemName.Name}dddddddddddffffffffffffffff
                  </div>
             
              
          })}

        
        </>
    )

}

export default Home;