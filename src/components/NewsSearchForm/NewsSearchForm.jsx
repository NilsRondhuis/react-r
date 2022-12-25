import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './NewsSearchForm.module.css';

const NewsSearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={css.btn}>
        search
      </button>
    </form>
  );
};

NewsSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewsSearchForm;
