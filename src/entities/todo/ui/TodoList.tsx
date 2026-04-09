import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import DeleteTodo from "../../../features/deleteTodo/DeleteTodo";
import './TodoList.css'

const TodoList = () => {
    const { todoList } = useContext(TodoContext)

    return (
        <div className="todoList">
            <ul>
                {todoList && todoList.length > 0 ? (
                    todoList.map((todo) => (
                        <li key={todo.id}>
                            <div className="todo">
                                <div className="todoText">{todo.title}</div>
                                <DeleteTodo id={todo.id}/>
                            </div>
                        </li>
                    ))
                ) : (<div className="nothingTodo"> Тут пусто </div>) }
            </ul>
        </div>
    )
}

export default TodoList;