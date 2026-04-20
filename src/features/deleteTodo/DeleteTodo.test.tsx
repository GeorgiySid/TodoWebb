import { describe, expect, it, vi } from 'vitest'

import { fireEvent, render, screen } from '@testing-library/react'

import { DeleteTodo } from './DeleteTodo'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

vi.mock('react-tostify', () => ({
  toast: vi.fn(),
}))

const mockSetTodoList = vi.fn()

const mockTodoList = [
  { id: '123', title: 'Сходить в туалет' },
  { id: '231', title: 'Встать с кровати' },
]

vi.mock('@/entities', () => ({
  useTodoStore: () => ({
    todoList: mockTodoList,
    setTodoList: mockSetTodoList,
  }),
}))

describe('DeleteTodo', () => {
  it('Компонент рендерится', () => {
    render(<DeleteTodo id='123' />)
    const button = screen.getByRole('button')
    expect(button).toBeDefined()
  })

  it('список фильтруется', () => {
    render(<DeleteTodo id='123' />)
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(mockSetTodoList).toHaveBeenCalled()

    const newTodoList = mockSetTodoList.mock.calls[0][0]

    expect(newTodoList).toHaveLength(1)
    expect(newTodoList[0].id).toBe('231')
  })
})
