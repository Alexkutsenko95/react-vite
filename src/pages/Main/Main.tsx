import { FC, ReactElement } from 'react';
import { Header } from '@/pages/Main/components/Header';
import { TodoForm } from '@/pages/Main/components/Todo/Form/TodoForm';
import { TodoInfo } from '@/pages/Main/components/Todo/Info/TodoInfo';
import { TodoControls } from '@/pages/Main/components/Todo/Controls/TodoControls';
import { TodoList } from '@/pages/Main/components/Todo/List/TodoList';
import { CounterCard } from '@/pages/Main/components/CounterCard';

export const Main: FC = (): ReactElement => (
  <>
    <Header />
    <TodoForm />
    <TodoInfo />
    <TodoControls />
    <TodoList />
    <CounterCard />
  </>);


