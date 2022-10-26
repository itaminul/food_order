import { Link } from "react-router-dom";
const Profile = (props) => {
    return(
        <div className="mt-10 ml-72">
           <button onClick={props.onLogout}>
           <p className="ml-5 text-black-500 text-2xl">  Yor successfully login </p> <br />
           <p className="ml-5 text-black-500 text-2xl">  Welcome to your profile  
           </p>

               <button className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button> 
               </button>
        </div>
    )
}

export default Profile;