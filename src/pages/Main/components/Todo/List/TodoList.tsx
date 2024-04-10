import { FC, ReactElement } from 'react';
import List from 'rc-virtual-list';
import { TodoItem } from '../Item/TodoItem';
import { useTodoStore } from '@/store/todos';
import { useDynamicHeight } from '@/hooks/useDynamicHeight.ts';
import { useAnimateTodos } from '@/pages/Main/components/Todo/List/useAnimateTodos.ts';
import { FOOTER_HEIGHT, HEADER_HEIGHT, LIST_ITEM_HEIGHT } from '@/pages/Main/components/Todo/List/constants.ts';
import './TodoList.styles.css';


export const TodoList: FC = (): ReactElement | null => {
  const todos = useTodoStore(({ todos }) => todos);
  const todoListRef = useAnimateTodos(todos);
  const {
    listHeight,
    itemHeight,
  } = useDynamicHeight({ headerHeight: HEADER_HEIGHT, footerHeight: FOOTER_HEIGHT, itemHeight: LIST_ITEM_HEIGHT });

  if (todos.length === 0) return null;

  return (
    <ul className="todo-list" ref={todoListRef}>
      <List data={todos} height={listHeight} itemHeight={itemHeight} itemKey="id">
        {(todo) => <TodoItem key={todo.id} todo={todo} />}
      </List>
    </ul>
  );
};