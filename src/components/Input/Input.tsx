import { FC, ChangeEvent, ReactElement } from 'react';
import { InputType } from '@/components/Input/constants.ts';
import './Input.styles.css';

interface ITodoInputProps {
  value: string;
  id?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type: InputType; // Use the enum for type prop
}

export const Input: FC<ITodoInputProps> = ({ ...props }): ReactElement => (
  <input
    className="todo-input"
    required
    {...props}
  />
);
