import { useCallback } from "react";
import { nanoid } from "nanoid";
import { useTodoStore } from "@/store/todos";
import { ITodo } from "@/store/todos/types.ts";

interface IUseTodoControls {
  createManyTodos: () => void;
  updateAllTodos: () => void;
  completeActiveTodos: () => void;
  removeCompletedTodos: () => void;
  todos: ITodo[];
}

export const useTodoControls = (): IUseTodoControls => {
  const {
    addTodo,
    updateTodo,
    completeActiveTodos,
    removeCompletedTodos,
    todos,
  } = useTodoStore((state) => state);

  const createManyTodos = useCallback((): void => {
    const times = [];
    for (let i = 0; i < 25; i++) {
      const start = performance.now();
      for (let j = 0; j < 100; j++) {
        const id = nanoid();
        const todo = {
          id,
          text: `Todo ${id}`,
          done: false,
        };
        addTodo(todo);
      }
      const difference = performance.now() - start;
      times.push(difference);
    }
    const time = Math.round(times.reduce((a, c) => (a += c), 0) / 25);
    console.log("Create time:", time);
  }, [addTodo]);

  const updateAllTodos = useCallback((): void => {
    const todos = useTodoStore.getState().todos;
    const start = performance.now();
    for (let i = 0; i < todos.length; i++) {
      updateTodo(todos[i].id);
    }
    const time = Math.round(performance.now() - start);
    console.log("Update time:", time);
  }, [updateTodo]);

  return {
    createManyTodos,
    updateAllTodos,
    completeActiveTodos,
    removeCompletedTodos,
    todos,
  };
};
