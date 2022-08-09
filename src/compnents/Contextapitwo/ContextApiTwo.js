import { useState } from "react";
import { ColorContext } from "./ColorContext";
import List from './List'

function ContextApiTwo() {
    const [done, setDone]= useState(false)
    const color = done ? 'green': 'black'

    return (
        <>
        <h1>Task</h1>
        <label htmlFor="">
            <input 
            type="checkbox"
            onChange={(e) => setDone(e.target.value)}
            />
        </label>

        <ColorContext.Provider>
         <List done={done} />
        </ColorContext.Provider>
        </>
    )
}

export default ContextApiTwo;