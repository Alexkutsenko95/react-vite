import { ForwardRefExoticComponent, forwardRef, RefAttributes } from 'react';
import { ITodo } from '@/store/todos/types.ts';
import { Button } from '@/components/Button/Button.tsx';
import { useTodoItemLogic } from '@/pages/Main/components/Todo/Item/useTodoItemLogic.ts';
import { Checkbox } from '@/components/Checkbox/Checkbox.tsx';
import { ButtonVariant } from '@/components/Button/constants.ts';
import './TodoItem.styles.css';

/**
 * Represents an interface for a Todo item.
 * @interface
 */
interface ITodoItem {
  todo: ITodo;
}

/**
 * TodoItem is a component that renders a single todo item in a list.
 *
 * @param {Object} props - The props for the TodoItem component.
 * @param {Object} props.todo - The todo item object containing id, text, and done properties.
 * @param {Function} props.updateTodo - The function to update the todo item.
 * @param {Function} props.handleRemove - The function to handle removal of the todo item.
 * @param {Object} ref - The React ref object.
 * @returns {ReactElement} - The rendered TodoItem component.
 */
export const TodoItem: ForwardRefExoticComponent<
  ITodoItem & RefAttributes<HTMLLIElement>
> = forwardRef<HTMLLIElement, ITodoItem>(({ todo }, ref) => {
  const { id, text, done } = todo;
  const { updateTodo, handleRemove } = useTodoItemLogic(id);

  return (
    <li ref={ref} className="todo-item">
      <Checkbox checked={done} onChange={() => updateTodo(id)} />
      <span style={done ? { textDecoration: 'line-through' } : undefined}>
        {text}
      </span>
      <Button onClick={handleRemove} text="✖" variant={ButtonVariant.REMOVE_SECONDARY} />
    </li>
  );
});
