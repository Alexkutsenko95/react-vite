import { FC, ReactElement } from 'react';
import List from 'rc-virtual-list';
import { TodoItem } from '../Item/TodoItem';
import { useTodoStore } from '@/store/todos';
import { useDynamicHeight } from '@/hooks/useDynamicHeight.ts';
import { useAnimateTodos } from '@/pages/Main/components/Todo/List/useAnimateTodos.ts';
import './TodoList.styles.css';

export const TodoList: FC = (): ReactElement | null => {
  const todos = useTodoStore(({ todos }) => todos);
  const todoListRef = useAnimateTodos(todos);
  const {
    listHeight,
    itemHeight,
  } = useDynamicHeight();

  if (todos.length === 0) return null;

  return (
    <ul className="todo-list" ref={todoListRef}>
      <List data={todos} height={listHeight} itemHeight={itemHeight} itemKey="id">
        {(todo) => <TodoItem key={todo.id} todo={todo} />}
      </List>
    </ul>
  );
};