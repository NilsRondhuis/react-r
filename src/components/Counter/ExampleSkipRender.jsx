import { useState, useEffect, useRef } from 'react';

const ExampleSkipRender = props => {
  const [value, setValue] = useState(0);
  const isFirstRender = useRef(true);

  // ??????
  useEffect(() => {
    if (isFirstRender.current) {
      console.log(isFirstRender);
      isFirstRender.current = false;
      return;
    }

    console.log('hello');
  });

  return (
    <div>
      <button type="button" onClick={() => setValue(pS => pS + 1)}>
        {value}
      </button>
      <p>
        <b>useEffect</b> skip first render in this component
      </p>
    </div>
  );
};

export default ExampleSkipRender;
