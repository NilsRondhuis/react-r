import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Section from 'components/common/Section/Section';
import BreedSelect from 'components/BreedSelect/BreedSelect';
import * as API from '../services/api';
import Dog from 'components/Dog/Dog';
// import ClipLoader from 'react-spinners/ClipLoader';
import DogSceleton from 'components/DogSceleton/DogSceleton';

class App extends Component {
  state = {
    dog: null,
    isLoading: false,
  };

  selectBreed = async breedId => {
    try {
      this.setState({ isLoading: true });
      const dog = await API.fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch {
      toast.error('Something went wrong!');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { dog, isLoading } = this.state;
    return (
      <>
        <Section>
          <BreedSelect onSelect={this.selectBreed} />
          {dog && !isLoading && <Dog dog={dog} />}
          {isLoading && <DogSceleton />}
          <Toaster position="bottom-right" reverseOrder={false} />
        </Section>
      </>
    );
  }
}

export default App;
