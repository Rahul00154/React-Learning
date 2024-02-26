import React from 'react';
import { useState } from 'react';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import ErrorBoundary from './ErrorBoundary';

const Counter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increaseCounter1 = () => {
    setCounter1((prev) => prev + 1);
  };

  const increaseCounter2 = () => {
    setCounter2((prev) => prev + 1);
  };

  return (
    <div>
      <ErrorBoundary>
        <Counter1
          value={counter1}
          onClick={increaseCounter1}
        />
      </ErrorBoundary>
      <Counter2
        value={counter2}
        onClick={increaseCounter2}
      />
    </div>
  );
};

export default Counter;
