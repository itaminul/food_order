import { Link } from "react-router-dom";

const VariableDetailScope = () => {
    return(
        <div className="mt-10">
            <h1 className="uppercase ... font-bold">The global scope</h1>
            <p>
                When the JavaScript engine executes a script, it creates a global execution context.
                </p>
                <p>
                Also, it also assigns variables that you declare outside of functions to the global execution context. These variables are in the global scope. They are also known as global variables.
                </p>
                <p>
                See the following example:
                </p>
                <p>

            var message = 'Hi';
            </p>

            <h1 className="uppercase ... font-bold">Local scope</h1>
            <p>

            The variables that you declare inside a function are local to the function. They are called local variables. For example:
            </p>
            <h1 className="uppercase ... font-bold">Block scope</h1>
            <p>
            ES6 provides the let and const keywords that allow you to declare variables in block scope.</p>
            <div className="mt-10">
                <Link to="/blogs">
                <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Back</button>
                </Link>           

            </div>
        </div>
    )
}
export default VariableDetailScope;