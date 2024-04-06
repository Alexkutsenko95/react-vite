import { FC, ReactElement } from 'react';
import { useTodoForm } from './useTodoForm.ts';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button.tsx';
import { InputType } from '@/components/Input/constants.ts';
import { ButtonVariant } from '@/components/Button/constants.ts';
import './TodoForm.styles.css';

export const TodoForm: FC = (): ReactElement => {
  const { onSubmit, text, onChange, submitDisabled } = useTodoForm();

  return (
    <form className="todo-form-wrapper" onSubmit={onSubmit}>
      <label htmlFor="todoText">New todo text</label>
      <div className="todo-form">
        <Input type={InputType.TEXT} id="todoText" value={text} onChange={onChange} />
        <Button variant={ButtonVariant.CREATE} text={'Add'} disabled={submitDisabled} />
      </div>
    </form>
  );
};
