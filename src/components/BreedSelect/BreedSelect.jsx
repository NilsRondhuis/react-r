import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import * as API from '../services/api';
import Select from 'react-select';

export class BreedSelect extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
  };

  state = {
    breeds: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const breeds = await API.fetchBreeds();
      this.setState({ breeds });
    } catch {
      toast.error('Something went wrong!');
    } finally {
      this.setState({ isLoading: false });
    }
  }

  makeOptions = () => {
    const options = this.state.breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
    return options;
  };

  handleChange = breedId => {
    this.props.onSelect(breedId);
  };

  render() {
    const options = this.makeOptions();
    const { isLoading } = this.state;
    return (
      <div>
        <form>
          <Select
            options={options}
            onChange={this.handleChange}
            isLoading={isLoading}
          />
          <Toaster position="bottom-right" reverseOrder={true} />
        </form>
      </div>
    );
  }
}

export default BreedSelect;
