import { useState, memo } from 'react';

const ChildComponent = memo(() => {
  //   console.log('Child re-render');
  return <div>ChildComponent</div>;
});

const MemoExample = props => {
  const [value, setValue] = useState(0);
  //   console.log('Parent re-render');
  return (
    <div>
      <button type="button" onClick={() => setValue(pS => pS + 1)}>
        Update parent state value: {value}
      </button>
      <ChildComponent />
    </div>
  );
};

export default MemoExample;
