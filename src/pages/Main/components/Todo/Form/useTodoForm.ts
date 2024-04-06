import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { nanoid } from "nanoid";
import { useTodoStore } from "@/store/todos";

export interface IUseTodoForm {
  text: string;
  submitDisabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

/**
 * Creates a custom hook for managing a todo form state and actions.
 *
 * @returns {IUseTodoForm}
 */
export const useTodoForm = (): IUseTodoForm => {
  const [text, setText] = useState<string>("");
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  useEffect(() => {
    setSubmitDisabled(!text.trim());
  }, [text]);

  const addTodo = useTodoStore(({ addTodo }) => addTodo);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (submitDisabled) return;
    const newTodo = {
      id: nanoid(),
      text,
      done: false,
    };

    addTodo(newTodo);
    setText("");
  };

  return {
    text,
    submitDisabled,
    onChange,
    onSubmit,
  };
};
