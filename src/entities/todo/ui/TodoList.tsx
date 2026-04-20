//import { useContext } from 'react'
import { useRef } from 'react'

import { useVirtualizer } from '@tanstack/react-virtual'

import { DeleteTodo } from '@/features'

import { useTodoStore } from '../store'
//import TodoContext from '../context/TodoContext'
import './style.css'

export const TodoList = () => {
  //const { todoList } = useContext(TodoContext)
  const { todoList } = useTodoStore()

  const scrollRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: todoList?.length ?? 0,
    estimateSize: () => 70,
    getScrollElement: () => scrollRef.current,
    measureElement: element => {
      return element?.getBoundingClientRect().height ?? 70
    },
  })

  const virtualItems = virtualizer.getVirtualItems()

  return (
    <div className='todoList' ref={scrollRef}>
      <ul
        style={{
          height: `${virtualizer.getTotalSize()}px`,
        }}>
        {todoList && todoList.length > 0 ? (
          virtualItems.map(virtualItem => {
            const todo = todoList[virtualItem.index]
            return (
              <li
                key={todo.id}
                ref={node => {
                  virtualizer.measureElement(node)
                }}
                data-index={virtualItem.index}
                style={{
                  transform: `translateY(${virtualItem.start}px)`,
                }}>
                <div className='todo'>
                  <div className='todoText'>{todo.title}</div>
                  <DeleteTodo id={todo.id} />
                </div>
              </li>
            )
          })
        ) : (
          <div className='nothingTodo'> Пусто</div>
        )}
      </ul>
    </div>
  )
}

TodoList.displayName = 'TodoList'
