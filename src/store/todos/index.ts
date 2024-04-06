import { create } from 'zustand';
import { ITodoStore } from './types.ts';
import { INITIAL_INFO, INITIAL_TODO_LIST } from './constants.ts';
import {
  appendTodo,
  completeActiveTodos,
  removeCompletedTodos,
  removeTodoById,
  updateTodoById,
} from './service.ts';

export const useTodoStore = create<ITodoStore>((set, get) => ({
  todos: INITIAL_TODO_LIST,
  info: INITIAL_INFO,
  addTodo(newTodo) {
    set({ todos: appendTodo({ todos: get().todos, newTodo }) });
  },
  updateInfo() {
    const todos = get().todos;
    const { length: total } = todos;
    const active = todos.filter((t) => !t.done).length;
    const done = total - active;
    const left = Math.round((active / total) * 100);
    set({ info: { total, active, done, left } });
  },
  updateTodo(id: string) {
    set({
      todos: updateTodoById({ todos: get().todos, id }),
    });
  },
  removeTodo(id: string) {
    set({
      todos: removeTodoById({ todos: get().todos, id }),
    });
  },
  completeActiveTodos() {
    set({
      todos: completeActiveTodos(get().todos),
    });
  },
  removeCompletedTodos() {
    set({
      todos: removeCompletedTodos(get().todos),
    });
  },
}));
