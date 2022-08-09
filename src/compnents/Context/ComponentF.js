import React, { Component } from "react";
import { UserConsumer } from "./userContext";
class ComponentF extends Component {
    reder() {
        return (
           
               <UserConsumer>
                   {username => {
                       return <div>Hellow {username}</div>
                   }}
               </UserConsumer>
            
        )

    }
}

export default ComponentF;