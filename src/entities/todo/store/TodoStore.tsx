import { create } from 'zustand'

import type { TodoState } from '../model/typesContext'

export const useTodoStore = create<TodoState>(set => ({
  todoList: [
    { id: '123', title: 'Сходить в туалет' },
    { id: '231', title: 'Встать с кровати' },
  ],
  inputValue: '',

  setInputValue: value => set({ inputValue: value }),

  setTodoList: todos =>
    set(state => ({
      todoList: typeof todos === 'function' ? todos(state.todoList) : todos,
    })),

  removeAllTodo: () => {
    set({ todoList: [] })
  },
}))
