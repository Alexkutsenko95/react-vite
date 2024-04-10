import { FC, InputHTMLAttributes, ReactElement } from 'react';
import { InputType } from '@/components/Input/constants.ts';
import './Checkbox.styles.css';

export const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }): ReactElement => (
  <input
    type={InputType.CHECKBOX}
    className={`checkbox ${className}`}
    {...props}
  />
);