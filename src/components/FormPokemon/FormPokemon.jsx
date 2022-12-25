import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const FormPokemon = ({ onFormSubmit }) => {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name } = e.currentTarget.elements;
    if (name.value.trim() === '') {
      toast.warn('Write name pokemon');
      return;
    }

    onFormSubmit(name.value);

    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

FormPokemon.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default FormPokemon;
