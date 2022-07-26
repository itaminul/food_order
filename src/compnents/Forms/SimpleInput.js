import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValied] = useState(true)
    const [enteredNameTouched, setEntredNameTouched] = useState(false)

    useEffect(() => {
        if(enteredNameIsValid) {
            console.log('Name input is valie!');
        }
    }, [enteredNameIsValid])

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }
    const formSubmissionHandler = event => {
        event.preventDefault();
        setEntredNameTouched(true);

        if(enteredName.trim() === '') {
            setEnteredNameIsValied(false)
            return;
        }
        setEnteredNameIsValied(true)


        console.log(enteredName);
        setEnteredName('');
    }

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameINputClasses = nameInputIsInvalid ? 'className="bg-indigo-500"' : 'className="bg-indigo-500"';



    return(
        <div>
           <form onSubmit={formSubmissionHandler}>
               <div>
                   <label htmlFor="">Name</label>
                   <input type="name" className="nameINputClasses bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" 
                   id="name" onChange={nameInputChangeHandler}
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