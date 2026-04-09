import { useContext } from "react";
import Button from "../../shared/ui/Button/Button";
import TodoContext from "../../entities/todo/context/TodoContext";
import type { Todo } from "../../entities/todo/model/typesContext";
import pluseIcon from '../../shared/assets/plus-svgrepo-com.svg'
import './AddTodo.css'

const AddTodo = () => {

    const {
        inputValue,
        setInputValue,
        setTodoList,
        todoList,
        } = useContext(TodoContext)

    const handleInputChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value)
    }

    const addTodo = () => {
        if(inputValue.trim() !== '') {
            const newTodo: Todo = {
                 id: Date.now().toString(),
                title:inputValue.trim()
            }
            setTodoList([newTodo, ...todoList])
            setInputValue('')
                
        }
    }

    const handleKeyPress = (e :React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }
    return (
        <div className="addTodo">
            <input 
            className="addInput"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Пиши сюда"
            /> 
            <Button 
            className={'addButton'}
            onClick={addTodo}
            icon="Добавить"
            iconPath={pluseIcon}
            imgName="addButtonIcon"
            />
        </div>
    )
}

export default AddTodo;