import { useReducer } from 'react';

const countReducer = (pS, action) => {
  console.log(action);

  switch (action.type) {
    case 'increment':
      return { ...pS, count: pS.count + action.payload };
    case 'decrement':
      return { ...pS, count: pS.count - action.payload };
    default:
      return;
  }
};

const Counter = () => {
  //   const [count, dispatch] = useReducer(countReducer, 0);
  const [count, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <p>{count.count}</p>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: 'increment', payload: 1 })}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'decrement', payload: 1 })}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
