import React, { useState } from "react";
import { v4 as uuid } from 'uuid'
import array from "./array";
import { useNavigate } from "react-router-dom";
import '../../compnents/Forms/SimpleInput.css'

const Create = () => {
    const [name, setName] = useState('');
    const [enterNameTouched, setEnterNameTouched] = useState(false);
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [status, setStatus] = useState('');
    let history = useNavigate();

    const enteredNameIsInValid = name.trim() != '';
    const enteredInpuitNameIsInvalid = !enteredNameIsInValid && enterNameTouched;

    const handleInputChange = e => {
        setName(e.target.value);
    }

    const nameInputBlurHandler = e => {
        setEnterNameTouched(true);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setEnterNameTouched(true)

        if(!enteredNameIsInValid) {
            return
        }
        setName('');
        setEnterNameTouched(false)

        const ids = uuid()
        let uni = ids.slice(0,8)
        let a = name;
        let b =age;
        let c = email;
        let d = nationality;
        let f = status;
        array.push({id: uni, Name:a,Age:b, Email: c, Nationality: d, Status: f})
        // console.log(a);
        history('/crud')
    }

    

    const nameInputClasses = enteredInpuitNameIsInvalid? 'form-control mt-10 invalid': 'form-control mt-10';
    return(
        <div>
           <form>
                <div className={nameInputClasses}>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" 
                    onChange={handleInputChange}
                    onBlur={nameInputBlurHandler}
                    value={name}
                     />
                     {enteredInpuitNameIsInvalid && <p className="text-red-500">Name is empty</p>}
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Age</label>
                    <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={e => setAge(e.target.value)}
                     required />
                </div>

                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                    <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={e => setEmail(e.target.value)}
                     required />
                </div>

                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nationality</label>
                    <select name="" id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={e => setNationality(e.target.value)}>
                        <option value="">--select--</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="US">US</option>
                        </select>
                </div>

                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
                    <select name="" id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={e => setStatus(e.target.value)}>
                        <option value="">--select--</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        </select>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={e => handleSubmit(e)}>Submit</button>
                </form>
        </div>
    )

}

export default Create;