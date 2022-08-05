import { Link } from "react-router-dom";
const BlogIndex = () => {
    return(
        <div className="pt-10">
            <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">                
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">What is variable scope?</h5>
                </a>
                <p class="mb-3 dark:text-gray-400">
                Scope determines the visibility and accessibility of a variable. JavaScript has three scopes:
                </p>
                <p>
                    <ul>
                        <li>  The global scope</li>
                        <li>  Local scope</li>
                        <li>  Block scope (started from ES6)</li>
                    </ul>                     
                    </p>
                <Link to="/variableDetailScope" className="mt-4 inline-flex items-center text-blue-600 hover:underline">
                   Read More                   
                </Link>
            </div>

            <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">                
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Javascript Object</h5>
                </a>
                <p class="mb-3 dark:text-gray-400">
                    Javascript object is a collection of properties.
                    </p>
                    <p>
                    An object is an unordered collection of key-value pairs. Each key value pair is called a property.
                    </p>
                <Link to="/javascriptobject" className="mt-4 inline-flex items-center text-blue-600 hover:underline">
                   Read More                   
                </Link>
            </div>
            <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">                
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Javascript Array</h5>
                </a>
                <p class="mb-3 dark:text-gray-400">
                    Javascript object is a collection of properties.
                    </p>
                    <p>
                    In JavaScript, an array is an order list of values. Each value is called an element specified by an index.
An array can hold values of mixed types.
                    </p>
                <Link to="/javascriptarray" className="mt-4 inline-flex items-center text-blue-600 hover:underline">
                   Read More                   
                </Link>
            </div>
        </div>
    )
}

export default BlogIndex;