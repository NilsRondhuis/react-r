import { useEffect, useState, useRef } from 'react';

const SkipMountExample = props => {
  const [searchQuery, setSearchQuery] = useState('');
  const isMounted = useRef(false);

  //exampe 1
  //   useEffect(() => {
  //     if (!isMounted.current) {
  //       isMounted.current = true;
  //       return;
  //     }
  //     console.log(`Execute code after update component: ${searchQuery}`);
  //   }, [searchQuery]);

  //exampe 2
  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    console.log(`Run code after check "": ${searchQuery}`);
  }, [searchQuery]);

  //   useEffect(() => {
  //     console.log('Start HTTP request');

  //     return () => {
  //       console.log('Canceled HTTP request');
  //     };
  //   }, []);

  return (
    <div>
      <button type="button" onClick={() => setSearchQuery('Ajax')}>
        Populate query
      </button>
    </div>
  );
};

export default SkipMountExample;
