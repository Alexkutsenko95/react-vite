import { FC, ChangeEvent, ReactElement } from 'react';
import { InputType } from '@/components/Input/constants.ts';
import './Input.styles.css';

interface IInput {
  value: string;
  id?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type: InputType;
}

export const Input: FC<IInput> = ({ ...props }): ReactElement => (
  <input
    className="todo-input"
    required
    {...props}
  />
);
