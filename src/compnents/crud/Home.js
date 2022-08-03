import Create from "./Create";
import Edit from "./Edit";
import array from "./array";
import {  Routes, Route, Link, useNavigate } from "react-router-dom";
const Home = () => {
    let history = useNavigate();

     
    return(
      <div>
         <div className="mt-10">
              <Link className="d-grid gap-2" to='/createCrud'>
                <button variant="warning" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" size="lg">Create</button>
              </Link>
          </div>
        <table className="table-fiexed mt-10 w-full">
          <thead>
            <tr>
              <th className="border px-8 py-4">SL</th>
              <th className="border px-8 py-4">Name</th>
              <th className="border px-8 py-4">Age</th>
              <th className="border px-8 py-4">Eamil</th>
              <th className="border px-8 py-4">Nationality</th>
              <th className="border px-8 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
              {array.map(name => 
              <tr>
                <td className="border px-8 py-4">{name.id}</td>
                <td className="border px-8 py-4">{name.Name}</td>
                <td className="border px-8 py-4">{name.Age}</td>
                <td className="border px-8 py-4">{name.Email}</td>               
                <td className="border px-8 py-4">{name.Nationality}</td>               
                <td className="border px-8 py-4">{name.Status}</td>              
                </tr>
                )}
            </tbody>
          </table>        
     
      	</div>
    )

}

export default Home;

//https://www.geeksforgeeks.org/how-to-do-crud-operations-in-reactjs/#:~:text=CRUD%20stands%20for%20Create%2C%20Read,JavaScript%20libraries%20for%20frontend%20development.