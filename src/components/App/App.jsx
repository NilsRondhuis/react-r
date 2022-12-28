import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Section from 'components/common/Section/Section';
import BreedSelect from 'components/BreedSelect/BreedSelect';
import * as API from '../services/api';
import Dog from 'components/Dog/Dog';
// import ClipLoader from 'react-spinners/ClipLoader';
import DogSceleton from 'components/DogSceleton/DogSceleton';

const App = () => {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectBreed = async breedId => {
    try {
      setLoading(true);
      const dog = await API.fetchDogByBreed(breedId);
      setDog(dog);
    } catch {
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  console.log(dog);

  return (
    <>
      <Section>
        <BreedSelect onSelect={selectBreed} />
        {dog && !loading && <Dog dog={dog} />}
        {loading && <DogSceleton />}
        <Toaster position="bottom-right" reverseOrder={false} />
      </Section>
    </>
  );
};

export default App;
