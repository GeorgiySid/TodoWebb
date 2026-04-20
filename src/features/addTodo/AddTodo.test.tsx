import { beforeEach, describe, expect, it, vi } from 'vitest'

import { fireEvent, render, screen } from '@testing-library/react'

import { AddTodo } from './AddTodo'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

vi.mock('react-toastify', () => ({
  toast: vi.fn(),
}))

const mockSetInputValue = vi.fn()

vi.mock('@/entities', () => ({
  useTodoStore: () => ({
    inputValue: '',
    setInputValue: mockSetInputValue,
    todoList: [],
    setTodoList: vi.fn(),
  }),
}))

describe('AddTodo', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('handleInputChange - меняет значение инпута', () => {
    render(<AddTodo />)
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'Тест' } })

    expect(mockSetInputValue).toHaveBeenCalledWith('Тест')
  })
})
