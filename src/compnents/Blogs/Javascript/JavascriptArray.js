import { Link } from "react-router-dom";
const JavascriptArray = () => {
    return(
        <div className="mt-10">
            <p>
            In JavaScript, an array is an order list of values. Each value is called an element specified by an index.
            An array can hold values of mixed types.
            </p>
            <p>There are two syntaxes for creating an empty array: </p>
            <p>let arr = new Array();</p>
            <p>let arr = [];</p>
            <p>let newArray = ['a', 'b','d']</p>
            <p> Adding an element to the end of an array </p>
            <p>let addArray = newArray.push('e')</p>
            <p>Adding an element to the beginning of an array</p>
            <p>let addArray = newArray.unshift('e')</p>
            <p>Removing an element from the end of an array</p>
            <p>const lastElement = newArray.prop()</p>
            <p> Removing an element from the beginning of an array</p>
            <p>const firstElement = newArray.shift()</p>
            <p>Finding an index of an element in the array</p>
            <p>let index = newArray.indexOf('a')</p>
            <p>Check if an value is an array</p>
            <p>let search = newArray.isArray('a')</p>


            <div className="mt-10">
                <Link to="/blogs">
                <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Back</button>
                </Link>           

            </div>
        </div>
    )
}
export default JavascriptArray;