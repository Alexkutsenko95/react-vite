import { describe, expect, it } from "vitest";
import {
  appendTodo,
  updateTodoById,
  removeTodoById,
  completeActiveTodos,
  removeCompletedTodos,
} from "@/store/todos/service.ts";
import { ITodo } from "@/store/todos/types.ts";

describe("appendTodo", () => {
  it("should append a todo to the list", () => {
    const todos: ITodo[] = [
      {
        id: "1",
        text: "First todo",
        done: false,
      },
      {
        id: "2",
        text: "Second todo",
        done: false,
      },
    ];

    const newTodo: ITodo = {
      id: "3",
      text: "Third todo",
      done: false,
    };

    const result = appendTodo({ todos, newTodo });

    expect(result).toHaveLength(3);
    expect(result[2]).toBe(newTodo);
  });
});

describe("Test updateTodoById function", () => {
  it("should toggle the done status of the todo with the given id", () => {
    const todos: ITodo[] = [
      { id: "1", text: "Do the dishes", done: false },
      { id: "2", text: "Clean the house", done: false },
    ];

    const updatedTodos = updateTodoById({ todos, id: "1" });
    expect(updatedTodos[0].done).toBeTruthy();
  });

  it("should not modify other todo items", () => {
    const todos: ITodo[] = [
      { id: "1", text: "Do the dishes", done: false },
      { id: "2", text: "Clean the house", done: false },
    ];

    const updatedTodos = updateTodoById({ todos, id: "1" });
    expect(updatedTodos[1]).toEqual(todos[1]);
  });

  it("should not modify the original array", () => {
    const todos: ITodo[] = [
      { id: "1", text: "Do the dishes", done: false },
      { id: "2", text: "Clean the house", done: false },
    ];

    const originalTodos = [...todos];
    updateTodoById({ todos, id: "1" });
    expect(todos).toEqual(originalTodos);
  });
});

describe("removeTodoById function", () => {
  it("should remove the correct todo by id", () => {
    const todos: ITodo[] = [
      { id: "1", text: "First todo", done: false },
      { id: "2", text: "Second todo", done: true },
      { id: "3", text: "Third todo", done: false },
    ];
    const idToRemove = "2";
    const result = removeTodoById({ todos, id: idToRemove });
    const expectedRemainTodos = [todos[0], todos[2]];
    expect(result).toEqual(expectedRemainTodos);
  });

  it("should not modify the todo list if the id is not found", () => {
    const todos: ITodo[] = [
      { id: "1", text: "First todo", done: false },
      { id: "2", text: "Second todo", done: true },
      { id: "3", text: "Third todo", done: false },
    ];
    const idToRemove = "4";
    const result = removeTodoById({ todos, id: idToRemove });
    expect(result).toEqual(todos);
  });
});

describe("completeActiveTodos function", () => {
  it("should complete all active todos", () => {
    const todos: ITodo[] = [
      { id: "1", text: "Todo 1", done: false },
      { id: "2", text: "Todo 2", done: true },
      { id: "3", text: "Todo 3", done: false },
    ];

    const actual = completeActiveTodos(todos);
    const expected: ITodo[] = [
      { id: "1", text: "Todo 1", done: true },
      { id: "2", text: "Todo 2", done: true },
      { id: "3", text: "Todo 3", done: true },
    ];

    expect(actual).toEqual(expected);
  });
});

describe("removeCompletedTodos function", () => {
  it("removes the todos that are marked as done", () => {
    const todos: ITodo[] = [
      { id: "1", text: "First todo", done: true },
      { id: "2", text: "Second todo", done: false },
      { id: "3", text: "Third todo", done: true },
      { id: "4", text: "Fourth todo", done: false },
    ];

    const result = removeCompletedTodos(todos);
    const expected: ITodo[] = [
      { id: "2", text: "Second todo", done: false },
      { id: "4", text: "Fourth todo", done: false },
    ];

    expect(result).toEqual(expected);
  });
});
