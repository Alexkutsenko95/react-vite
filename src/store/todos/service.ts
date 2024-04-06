import { ITodo } from "./types.ts";

/**
 * Appends a new todo to the existing list of todos.
 *
 * @param {Object} params - The parameters for appending the todo.
 * @param {Array} params.todos - The current list of todos.
 * @param {Object} params.newTodo - The new todo to be appended.
 * @returns {Array} - The updated list of todos after appending the new todo.
 */
export const appendTodo = ({
  todos,
  newTodo,
}: {
  todos: ITodo[];
  newTodo: ITodo;
}): ITodo[] => [...todos, newTodo];

/**
 * Updates a todo item in the array by its id, changing the 'done' property to the opposite value.
 *
 * @param {Object[]} todos - The array of todo items.
 * @param {string} id - The id of the todo item to update.
 * @returns {Object[]} - The updated array of todo items.
 */
export const updateTodoById = ({
  todos,
  id,
}: {
  todos: ITodo[];
  id: string;
}): ITodo[] => todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));

/**
 * Removes a todo from the list of todos by its ID.
 *
 * @param {Object} options - The options object.
 * @param {ITodo[]} options.todos - The array of todos.
 * @param {string} options.id - The ID of the todo to be removed.
 * @returns {ITodo[]} - The updated array of todos after removal.
 */
export const removeTodoById = ({
  todos,
  id,
}: {
  todos: ITodo[];
  id: string;
}): ITodo[] => todos.filter((t) => t.id !== id);

/**
 * Updates the 'done' property of each todo item in the given array.
 *
 * @param {ITodo[]} todos - An array of todo items.
 * @returns {ITodo[]} - The updated todo array.
 */
export const completeActiveTodos = (todos: ITodo[]): ITodo[] =>
  todos.map((t) => (t.done ? t : { ...t, done: true }));

/**
 * Removes completed todos from the todos array.
 *
 * @param {Array.<ITodo>} todos - The array of todos.
 * @returns {Array.<ITodo>} - The updated array of todos without completed todos.
 */
export const removeCompletedTodos = (todos: ITodo[]): ITodo[] =>
  todos.filter((t) => !t.done);
