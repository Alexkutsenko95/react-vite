import { FC, ReactElement } from 'react';
import { useUpdateTodoInfo } from '@/pages/Main/components/Todo/Info/useUpdateTodoInfo.ts';
import { TodoInfoItem } from '@/pages/Main/components/Todo/Info/TodoInfoItem.tsx';
import { useTodoStore } from '@/store/todos';
import './TodoInfo.styles.css';

enum TODO_INFO_KEYS {
  TOTAL = 'Total',
  ACTIVE = 'Active',
  DONE = 'Done',
  LEFT = 'Left',
}

export const TodoInfo: FC = (): ReactElement | null => {
  /* 👇 */
  const { todos, info } = useTodoStore(({ todos, info, updateInfo }) => ({
    todos,
    info,
    updateInfo,
  }));

  useUpdateTodoInfo();

  if (!info || !todos.length) return null;

  return (
    <div className="todo-info">
      {Object.values(TODO_INFO_KEYS).map((key) => (
        <TodoInfoItem key={key} label={key} value={info[key.toLowerCase()]} />
      ))}
    </div>
  );
};
