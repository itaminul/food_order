import { Link } from "react-router-dom";
const BlogIndex = () => {
    return(
        <div className="pt-10">
            <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">                
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">What is variable scope?</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
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
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                <Link to="/variableDetailScope" className="mt-4 inline-flex items-center text-blue-600 hover:underline">
                   Read More                   
                </Link>
            </div>
        </div>
    )
}

export default BlogIndex;