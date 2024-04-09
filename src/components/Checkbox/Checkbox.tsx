import { FC, ReactElement } from 'react';
import { InputType } from '@/components/Input/constants.ts';
import './Checkbox.styles.css';

interface ICheckbox {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export const Checkbox: FC<ICheckbox> = ({ className, ...props }): ReactElement => (
  <input
    type={InputType.CHECKBOX}
    className={`checkbox ${className}`}
    {...props}
  />
);