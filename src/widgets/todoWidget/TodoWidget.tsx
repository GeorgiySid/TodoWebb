import { useContext } from "react";
import TodoList from "../../entities/todo/ui/TodoList";
import AddTodo from "../../features/addTodo/AddTodo";
import DeleteAllTodo from "../../features/deleteAllTodo/DeleteAllTodo";
import TodoContext from "../../entities/todo/context/TodoContext";
import './TodoWidget.css'

const TodoWidget = () => {
    const { todoList } = useContext(TodoContext)
    return(
        <div className="todoWidget">
            <div className="titleTodo">TodoApp</div>
            <AddTodo />
            <TodoList />
            <div className="widgetTodoFooter">
                У вас осталось {todoList.length} задач !
                <DeleteAllTodo />
            </div>
        </div>
    )
}

export default TodoWidget;