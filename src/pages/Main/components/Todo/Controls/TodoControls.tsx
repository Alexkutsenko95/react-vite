import { FC, ReactElement } from 'react';
import { Button } from '@/components/Button/Button';
import { useTodoControls } from '@/pages/Main/components/Todo/Controls/useTodoControls.ts';
import { ButtonVariant } from '@/components/Button/constants.ts';
import './TodoControls.styles.css';

export const TodoControls: FC = (): ReactElement | null => {
  const {
    completeActiveTodos,
    removeCompletedTodos,
    createManyTodos,
    updateAllTodos,
    todos,
  } = useTodoControls();

  if (!todos.length) return null;

  return (
    <div className="todo-controls">
      <Button onClick={completeActiveTodos} text="Complete all todos" variant={ButtonVariant.COMPLETE} />
      <Button onClick={removeCompletedTodos} text="Remove completed todos" variant={ButtonVariant.REMOVE} />
      <Button onClick={createManyTodos} text="Create 2500 todos" variant={ButtonVariant.CREATE} />
      <Button onClick={updateAllTodos} text="Update all todos" variant={ButtonVariant.COMPLETE} />
    </div>
  );
};
