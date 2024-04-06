import { FC, ReactElement } from 'react';
import { useCountStore } from '@/store/counter';
import { Button } from '@/components/Button/Button';
import './CounterCard.styles.css';

export const CounterCard: FC = (): ReactElement => {
  const { count, inc } = useCountStore();

  return (
    <div className="counter-card">
      <Button onClick={inc} text={`count is ${count}`} />
    </div>
  );
};