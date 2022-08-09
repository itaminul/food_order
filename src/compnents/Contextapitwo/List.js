import Todo from "./Todo"
import data from './data.json'
const List = () => {
    {console.log(data)}
    const todoItems = data.todos.map((todo) => (
        <li>
            <Todo todo={todo} />
        </li>
    ))
    return(
        <ul>
            {console.log(todoItems)}
            {todoItems}
            </ul>

    )
}

export default List;