import { Link } from "react-router-dom";
const Profile = (props) => {
    return(
        <div className="mt-10 ml-72">
           <button onClick={props.onLogout}>Welcome to your profile Logout</button>
        </div>
    )
}

export default Profile;