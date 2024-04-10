import { FC, ReactElement, InputHTMLAttributes } from 'react';
import './Input.styles.css';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }): ReactElement => (
  <input
    className={`input ${className}`}
    {...props}
  />
);
