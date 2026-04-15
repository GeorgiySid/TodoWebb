//import { useContext } from 'react';
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

//import TodoContext from '@/entities/todo/context/TodoContext';

import { Button } from '@/shared'
import trashIcon from '@/shared/assets/trash-svgrepo-com.svg'

import { useTodoStore } from '../../entities'
import './style.css'

interface DeleteTodoProps {
  id: string | number
}

export const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const { t } = useTranslation()

  //const { setTodoList, todoList } = useContext(TodoContext);
  const { todoList, setTodoList } = useTodoStore()

  const notify = () => toast(t('taskDeleted'))

  const deleteTodo = () => {
    setTodoList(todoList.filter(todo => todo.id !== id))
    notify()
  }

  return (
    <div className='deleteTodo'>
      <Button
        className={'deleteButton'}
        onClick={deleteTodo}
        children={<img src={trashIcon} alt={t('delete')} className={'deleteButtonIcon'} />}
      />
    </div>
  )
}

DeleteTodo.displayName = 'DeleteTodo'
