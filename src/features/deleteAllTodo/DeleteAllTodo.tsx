//import { useContext } from 'react';
import { useTranslation } from 'react-i18next'

import { useTodoStore } from '@/entities'

//import TodoContext from '@/entities/todo/context/TodoContext';

import { Button } from '@/shared'

import './style.css'

export const DeleteAllTodo = () => {
  const { t } = useTranslation()

  //const { setTodoList } = useContext(TodoContext);

  const removeAllTodo = useTodoStore(state => state.removeAllTodo)

  const deleteAllTodo = () => {
    const isConfirmed = window.confirm(t('confirmDeleteAll'))
    if (isConfirmed) {
      removeAllTodo()
      console.log('succes')
    }
  }

  return (
    <div className='deleteAllTodo'>
      <Button className={'deleteAllButton'} onClick={deleteAllTodo} children={t('deleteAll')} />
    </div>
  )
}

DeleteAllTodo.displayName = 'DeleteAllTodo'
