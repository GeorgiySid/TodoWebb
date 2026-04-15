//import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { TodoList } from '@/entities'

//import TodoContext from '@/entities/todo/context/TodoContext'

import { AddTodo, DeleteAllTodo, LanguageButtons } from '@/features'

import { useTodoStore } from '../../entities'
import './style.css'

export const TodoWidget = () => {
  const { t } = useTranslation()

  //const { todoList } = useContext(TodoContext)
  const { todoList } = useTodoStore()

  return (
    <div className='todoWidget'>
      <div className='titleTodo'>{t('todoApp')}</div>
      <LanguageButtons />
      <AddTodo />
      <TodoList />
      <div className='widgetTodoFooter'>
        {t('countTasks')} {todoList.length} {t('task')} !
        <DeleteAllTodo />
      </div>
    </div>
  )
}

TodoWidget.displayName = 'TodoWidget'
