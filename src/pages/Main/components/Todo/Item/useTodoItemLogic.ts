import { useCallback, MouseEvent } from "react";
import { gsap } from "gsap";
import { useTodoStore } from "@/store/todos";


interface IUseTodoItemLogicReturnType {
  updateTodo: (id: string) => void;
  handleRemove: (targetElement: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A function that provides logic for handling a todo item.
 * @param {string} id - The unique identifier of the todo item.
 * @returns {IUseTodoItemLogicReturnType} - The return value contains the updateTodo function and the handleRemove function.
 */
export const useTodoItemLogic = (id: string): IUseTodoItemLogicReturnType => {
  const { updateTodo, removeTodo } = useTodoStore(
    ({ updateTodo, removeTodo }) => ({
      updateTodo,
      removeTodo,
    }),
  );

  const handleRemove = useCallback(
    (targetElement: MouseEvent<HTMLButtonElement>) => {
      gsap.to(targetElement, {
        opacity: 0,
        x: -100,
        onComplete: () => removeTodo(id),
      });
    },
    [removeTodo, id],
  );

  return { updateTodo, handleRemove };
};
