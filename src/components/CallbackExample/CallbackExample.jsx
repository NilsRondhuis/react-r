import { useState, useCallback, memo } from 'react';

const ChildComponent = memo(({ onDoStuff }) => {
  //   console.log(`ChildComponent re-render: ${Date.now()} `);
  return <div>ChildComponent</div>;
});

const CallbackExample = props => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(100);

  //   console.log(`ParentComponent re-render: ${Date.now()}`);

  const doStuff = useCallback(() => {
    // console.log('Doing stuff' + value);
  }, [value]);

  return (
    <div>
      <button type="button" onClick={() => setValue(pS => pS + 1)}>
        {value}
      </button>
      <button type="button" onClick={() => setSecondValue(pS => pS + 1)}>
        {secondValue}
      </button>
      <ChildComponent onDoStuff={doStuff} />
    </div>
  );
};

CallbackExample.propTypes = {};

export default CallbackExample;
