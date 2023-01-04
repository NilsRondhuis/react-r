import PropTypes from 'prop-types';

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
