import { useState } from 'react';

import { log } from '../../log';

type HistoryItemProps = {
  count: number;
};

function HistoryItem({ count }: HistoryItemProps) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}

type CounterHistoryProps = {
  history: number[];
};

export default function CounterHistory({ history }: CounterHistoryProps) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem key={index} count={count} />
      ))}
    </ol>
  );
}