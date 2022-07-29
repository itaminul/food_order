import { useState } from "react";

const Index = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    function handleInputChange(e) {
        setTodo(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if(todo !== "") {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    text: todo.trim()
                }
            ])
        }
        setTodo("");
    }
    return(
        <div className="flex flex-wrap p-5 bg-blue-50 w-full">
            <form onSubmit={handleFormSubmit}>  
            <label htmlFor="">Inter your Name</label>              
                <input 
                name="todo"
                type="text"
                onChange={handleInputChange}
                />
            </form>
            <br />
                <ul>
                {todos.map((todo) => (
                    <li>{todo.text}</li>
                ))}
                </ul>
           
        </div>
    )
}

export default Index;