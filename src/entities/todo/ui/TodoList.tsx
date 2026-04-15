//import { useContext } from 'react'
import { DeleteTodo } from '@/features'

import { useTodoStore } from '../store'
//import TodoContext from '../context/TodoContext'
import './style.css'

export const TodoList = () => {
  //const { todoList } = useContext(TodoContext)
  const { todoList } = useTodoStore()

  return (
    <div className='todoList'>
      <ul>
        {todoList && todoList.length > 0 ? (
          todoList.map(todo => (
            <li key={todo.id}>
              <div className='todo'>
                <div className='todoText'>{todo.title}</div>
                <DeleteTodo id={todo.id} />
              </div>
            </li>
          ))
        ) : (
          <div className='nothingTodo'> Тут пусто </div>
        )}
      </ul>
    </div>
  )
}

TodoList.displayName = 'TodoList'
