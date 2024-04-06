import { FC, ReactElement } from 'react';
import './Checkbox.styles.css';

interface ICheckbox {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: FC<ICheckbox> = ({ ...props }): ReactElement => (
  <input
    type="checkbox"
    className="todo-checkbox"
    {...props}
  />
);