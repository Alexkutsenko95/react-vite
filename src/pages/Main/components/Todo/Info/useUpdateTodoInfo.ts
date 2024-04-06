import { useEffect } from "react";
import { useTodoStore } from "@/store/todos";

/**
 * Function to update the todo info using a custom hook.
 *
 * @returns  {void} Returns nothing.
 */
export const useUpdateTodoInfo = (): void => {
  const { todos, updateInfo } = useTodoStore(({ todos, updateInfo }) => ({
    todos,
    updateInfo,
  }));

  useEffect(() => {
    updateInfo();
  }, [todos, updateInfo]);
};
