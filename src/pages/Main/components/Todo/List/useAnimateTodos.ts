import { useLayoutEffect, useRef, MutableRefObject } from "react";
import { gsap } from "gsap";
import { ITodo } from "@/store/todos/types.ts";

/**
 * Animates the todos list based on the number of todos provided.
 *
 * @param {Array} todos - An array of todo items.
 *
 * @returns {MutableRefObject<HTMLUListElement | null>} - A mutable ref object to the todo list element.
 */
export const useAnimateTodos = (
  todos: ITodo[],
): MutableRefObject<HTMLUListElement | null> => {
  const todoListRef = useRef<HTMLUListElement>(null);
  useLayoutEffect(() => {
    if (todoListRef.current) {
      const q = gsap.utils.selector(todoListRef);
      gsap.fromTo(
        q(".todo-item"),
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 1 / todos.length },
      );
    }
  }, [todos]);

  return todoListRef;
};
