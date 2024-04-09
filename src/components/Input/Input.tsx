import { FC, ChangeEvent, ReactElement } from 'react';
import { InputType } from './constants.ts';
import './Input.styles.css';

interface IInput {
  value: string;
  id?: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  type: InputType;
}

export const Input: FC<IInput> = ({ className, ...props }): ReactElement => (
  <input
    className={`input ${className}`}
    {...props}
  />
);
