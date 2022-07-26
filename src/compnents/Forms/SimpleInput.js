import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import './SimpleInput.css'
const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEntredNameTouched] = useState(false)

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const nameInputBlurHandler = event => {
        setEntredNameTouched(true);


    }
    const formSubmissionHandler = event => {
        event.preventDefault();

        setEntredNameTouched(true);

        if(!enteredNameIsValid) {
            return;
        }

        setEnteredName('');
        setEntredNameTouched(false);
    }


    const nameINputClasses = nameInputIsInvalid 
    ? 'form-control invalid' 
    : 'form-control';



    return(
        <div>
           <form onSubmit={formSubmissionHandler}>
               <div className={nameINputClasses}>
                   <label htmlFor="">Name</label>
                   <input type="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" 
                   id="name" 
                   onChange={nameInputChangeHandler}
                   onBlur={nameInputBlurHandler}
                   value={enteredName}
                   />
                   {nameInputIsInvalid && <p className="text-red-500">Name must not be empty</p>}
               </div>
               <div>
                   <button>Save</button>
               </div>
           </form>
        </div>
    )
}

export default SimpleInput;