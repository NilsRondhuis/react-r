import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ onChange, value }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
