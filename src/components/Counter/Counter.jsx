import { useState, useEffect } from 'react';

const Counter = props => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const incrementCounterA = () => {
    setCounterA(pS => pS + 1);
  };
  const incrementCounterB = () => {
    setCounterB(pS => pS + 1);
  };

  useEffect(() => {
    const total = counterA + counterB;
    setTotalCount(total);
  }, [counterA, counterB]);

  return (
    <div>
      <p>Total click {totalCount}</p>
      <button type="button" onClick={incrementCounterA}>
        Add increment CounterA {counterA}
      </button>
      <button type="button" onClick={incrementCounterB}>
        Add increment CounterB {counterB}
      </button>
    </div>
  );
};

export default Counter;
