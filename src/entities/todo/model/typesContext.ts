export type Todo = {
    id:string,
    title:string,
}

export type TodoContextType = {
    todoList: Todo[],
    inputValue: string,
    setInputValue: (value: string | ((prev:string) => string)) => void,
    setTodoList: (todos: Todo[] | ((prevTodos: Todo[]) => Todo[])) => void
}
