import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class FormPokemon extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = e.currentTarget.elements;
    if (name.value.trim() === '') {
      toast.warn('Write name pokemon');
      return;
    }

    this.props.onFormSubmit(name.value);

    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default FormPokemon;
