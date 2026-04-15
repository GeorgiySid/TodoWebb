export type Todo = {
  id: string
  title: string
}
export interface TodoState {
  todoList: Todo[]
  inputValue: string
  setInputValue: (value: string) => void
  setTodoList: (todos: Todo[] | ((prevTodo: Todo[]) => Todo[])) => void
  removeAllTodo: () => void
}
export type TodoContextType = {
  todoList: Todo[]
  inputValue: string
  setInputValue: (value: string | ((prev: string) => string)) => void
  setTodoList: (todos: Todo[] | ((prevTodos: Todo[]) => Todo[])) => void
}
