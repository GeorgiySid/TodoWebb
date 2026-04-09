import { useContext } from "react"
import TodoContext from "../../entities/todo/context/TodoContext"
import Button from "../../shared/ui/Button/Button"
import trashIcon from '../../shared/assets/trash-svgrepo-com.svg'
import './DeleteTodo.css'

interface DeleteTodoProps {
    id: string | number
}

const DeleteTodo = ({ id } : DeleteTodoProps) => {

const {
    setTodoList,
    todoList } = useContext(TodoContext)

    const deleteTodo = () => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    return(
        <div className="deleteTodo">
            <Button
                className={'deleteButton'}
                onClick={deleteTodo}
                iconPath={trashIcon}
                icon="Удалить"
                imgName="deleteButtonIcon"
            />
        </div>
    )
}

export default DeleteTodo;