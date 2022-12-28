import { useState } from 'react';
import ChildComponent from './ChildComponent';

const HTTPReqAbort = props => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setIsVisible(pS => !pS)}>
        {isVisible ? 'Unmount' : 'Mount'}
      </button>
      {isVisible && <ChildComponent />}
    </div>
  );
};

export default HTTPReqAbort;
