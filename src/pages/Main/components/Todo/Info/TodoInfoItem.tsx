import { FC, ReactElement } from 'react';

interface ITodoInfoItemProps {
  label: string;
  value: string | number;
}

export const TodoInfoItem: FC<ITodoInfoItemProps> = ({ label, value }): ReactElement => (
  <span className="todo-info-item">
      {label}: {value} type casting as necessary
    </span>
);
