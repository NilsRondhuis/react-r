import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'redux-toolkit/actions';

export const CounterReduxToolkit = props => {
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Value: {value}</p>
      <div>
        <button type="button" onClick={() => dispatch(decrement(5))}>
          -5
        </button>
        <button type="button" onClick={() => dispatch(increment(5))}>
          +5
        </button>
      </div>
    </div>
  );
};
