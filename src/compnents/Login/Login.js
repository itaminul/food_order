import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {
    const storeUserLoggedInInformation = localStorage.getItem('isLoggedIn')
    if(storeUserLoggedInInformation === '1') {
        setIsLoggedIn(true)
    }
    }, [])
    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn','1')
        setIsLoggedIn(true)
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    }
    return(
       <div>
           {!isLoggedIn && <LoginForm onLogin={loginHandler} />}
           {isLoggedIn && <Profile onLogout={logoutHandler} />}
       </div>
    )
}
export default Login;