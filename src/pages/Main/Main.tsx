import { FC, ReactElement } from 'react';
import { Header } from '@/pages/Main/components/Header.tsx';
import { TodoForm } from '@/pages/Main/components/Todo/Form/TodoForm.tsx';
import { TodoInfo } from '@/pages/Main/components/Todo/Info/TodoInfo.tsx';
import { TodoControls } from '@/pages/Main/components/Todo/Controls/TodoControls.tsx';
import { TodoList } from '@/pages/Main/components/Todo/List/TodoList.tsx';
import { CounterCard } from '@/pages/Main/components/CounterCard.tsx';

export const Main: FC = (): ReactElement => (
  <>
    <Header />
    <TodoForm />
    <TodoInfo />
    <TodoControls />
    <TodoList />
    <CounterCard />
  </>);


