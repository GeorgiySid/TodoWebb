import { TodoProvider } from '@/entities/todo/context/TodoContext'

import { TodoWidget } from '@/widgets'

import './style.css'

export const MainPage = () => {
  return (
    <TodoProvider>
      <div className='mainPage'>
        <TodoWidget />
      </div>
    </TodoProvider>
  )
}

MainPage.displayName = 'MainPage'
