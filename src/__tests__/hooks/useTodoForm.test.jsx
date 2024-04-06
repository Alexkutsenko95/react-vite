import { describe, expect, test, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTodoForm } from '@/pages/Main/components/Todo/Form/useTodoForm';
import { useTodoStore } from '@/store/todos';

vi.mock('@/store/todos', () => ({
  useTodoStore: vi.fn(() => ({
    getState: () => ({
      addTodo: vi.fn(),
    }),
    setState: vi.fn(),
    addTodo: vi.fn(),
  })),
}));

describe('useTodoForm', () => {
  let addTodoMock;

  beforeEach(() => {
    vi.clearAllMocks();

    // Mocking the addTodo function within the store
    addTodoMock = vi.fn();
    useTodoStore.mockImplementation(() => ({
      getState: () => ({ addTodo: addTodoMock }),
      setState: vi.fn(),
      addTodo: addTodoMock,
    }));
  });

  test('should update text state on change', async () => {
    const { result } = renderHook(() => useTodoForm());

    act(() => {
      result.current.onChange({ target: { value: 'New Todo' } });
    });

    expect(result.current.text).toBe('New Todo');
    expect(result.current.submitDisabled).toBe(false);
  });

});