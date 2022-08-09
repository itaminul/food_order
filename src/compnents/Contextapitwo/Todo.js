import { useContext, useState } from "react";
import { ColorContext } from "./ColorContext";

function Todo({ todo }) {
    const { done, color } = useState();
    // const color = useContext(ColorContext)
    return(
        <p style={{ color: color}}>
            <label htmlFor="">
                <input type="checkbox"
                checked={done}
                readOnly={true}
                />
            </label>
            {todo.title} . {todo.owner}

        </p>
    )
}

export default Todo;