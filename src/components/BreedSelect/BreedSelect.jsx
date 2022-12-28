import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import * as API from '../services/api';
import Select from 'react-select';

const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function getBreeds() {
      try {
        setLoading(true);
        const breeds = await API.fetchBreeds();
        setBreeds(breeds);
        // setBreeds(await API.fetchBreeds())
      } catch (error) {
        toast.error('Something went wrong!');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const option = useMemo(() => {
    return breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  }, [breeds]);

  const handleChange = breedId => {
    onSelect(breedId.value);
  };

  return (
    <div>
      <form>
        <Select options={option} onChange={handleChange} isLoading={loading} />
        <Toaster position="bottom-right" reverseOrder={true} />
      </form>
    </div>
  );
};

BreedSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default BreedSelect;
