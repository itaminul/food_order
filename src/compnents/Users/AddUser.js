import React, { useState } from "react";
import Button from "../UI/Button";
const AddUser = (props) => {
    const [yourName, setYourName] = useState('');
    const [userName, setUserName] = useState('');
    const [passwoed, setPasswoed] = useState('');

    const addUserHandler = event => {
        event.preventDefault();
        console.log(yourName, userName, passwoed)
        if(yourName.trim().length === 0 || userName.trim.length ===0 ) {
            return;
        }
        setYourName('')
        setUserName('')
        setPasswoed('')

    }

    const yourNameHandler = (e) => {
        setYourName(e.target.value)
    }

    const userNameHandler = (e) => {
        setUserName(e.target.value);
       
    }

    const passwordHandler = (e) => {
        setPasswoed(e.target.value);
    }

    return(
        <form onSubmit={addUserHandler}>
            <div class="mb-6 mt-10">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="name@flowbite.com"
                name="yourName"
                onChange={yourNameHandler}                
                value={yourName} />
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your user name</label>
                <input type="text" name="username" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 
                 value={userName}
                 onChange={userNameHandler}
                />
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input type="text" name="username" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                 value={passwoed}
                 onChange={passwordHandler}
                />
            </div>
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <Button type="submit">Submit</Button>
        </form>

    )

}
export default AddUser;