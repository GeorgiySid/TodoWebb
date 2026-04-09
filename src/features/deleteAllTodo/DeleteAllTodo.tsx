import { useContext } from "react"
import TodoContext from "../../entities/todo/context/TodoContext"
import Button from "../../shared/ui/Button/Button"
import './DeleteAllTodo.css'

const DeleteAllTodo = () => {

const { setTodoList } = useContext(TodoContext)

    const deleteAllTodo = () => {
        setTodoList([])
    }

    return(
        <div className="deleteAllTodo">
            <Button
            className={'deleteAllButton'}
            onClick={deleteAllTodo}
            name={'Удалить все'}
            />
        </div>
    )
}

export default DeleteAllTodo;