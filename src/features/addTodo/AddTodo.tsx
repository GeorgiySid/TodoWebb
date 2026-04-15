//import { useContext } from 'react';
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { useTodoStore } from '@/entities'
//import TodoContext from '@/entities/todo/context/TodoContext';
import type { Todo } from '@/entities/todo/model/typesContext'

import { Button } from '@/shared'
import pluseIcon from '@/shared/assets/plus-svgrepo-com.svg'

import './style.css'

export const AddTodo = () => {
  const { t } = useTranslation()

  //const { inputValue, setInputValue, setTodoList, todoList } = useContext(TodoContext);
  const { inputValue, setInputValue, todoList, setTodoList } = useTodoStore()
  const notify = () => toast(t('taskAdded'))

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(e.target.value)
  }

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: inputValue.trim(),
      }
      setTodoList(() => [newTodo, ...todoList])
      setInputValue('')
    }
    notify()
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }
  return (
    <div className='addTodo'>
      <input
        className='addInput'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder={t('placeholder')}
      />
      <Button
        className={'addButton'}
        onClick={addTodo}
        children={<img src={pluseIcon} alt={t('add')} className={'addButtonIcon'} />}
      />
    </div>
  )
}

AddTodo.displayName = 'AddTodo'
