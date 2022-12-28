import { useState, useMemo } from 'react';

const UseMemoExample = props => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const memoValue = useMemo(() => {
    // console.log('Count memo value');
    return a + b;
  }, [a, b]);

  return (
    <div>
      <button type="button" onClick={() => setA(pS => pS + 1)}>
        updateA: {a}
      </button>
      <button type="button" onClick={() => setB(pS => pS + 1)}>
        updateB: {b}
      </button>
      <button type="button" onClick={() => setC(pS => pS + 1)}>
        updateC: {c}
      </button>
      <p>value: {memoValue}</p>
    </div>
  );
};

export default UseMemoExample;
