import { Link } from "react-router-dom";
const JavascriptObject = () => {
    return(
        <div className="mt-10">
            <h1 className="uppercase ... font-bold">The global scope</h1>
            <p class="mb-3 dark:text-gray-400">Javascript object is a collection of roperties.
                    </p>
                    <p>
                    An object is an unordered collection of key-value pairs. Each key value pair is called a property.
                    </p>
                    <p>The following example create an empty objet using the object literal notation:</p>
                    <p> {`let empty = new Object()  ( "object constructor" syntax )`} </p>
                    <p> {`let empty = {}  ( "object literal" syntax )`} </p>
                    <p>
                        The following example create an object with properties, we use the key:value within the curly braces.
                    </p>
                    <p>
                        {`let  person = {
                            firstName: 'Aminul,
                            lastName: 'Huq'
                        }`}
                    </p>
            <div className="mt-10">
                <Link to="/blogs">
                <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Back</button>
                </Link>           

            </div>
        </div>
    )
}

export default JavascriptObject;