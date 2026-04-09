import { createContext, useState, type ReactNode } from "react";
import type {  Todo, TodoContextType } from "../model/typesContext";

const defaultContextValue: TodoContextType = {
    todoList: [],
    inputValue:'',
    setInputValue: () => {},
    setTodoList: () => {}
}

const TodoContext = createContext<TodoContextType>(defaultContextValue);

export const TodoProvider = ({ children } : { children:ReactNode }) => {
    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState<Todo[]>([{id: "123", title:'Сходить в туалет'}, {id:"231",title:'Встать с кровати'}])


    const contextValue  = {
        todoList,
        inputValue,
        setTodoList,
        setInputValue,
    }
    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )

}

export default TodoContext;