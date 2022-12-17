import { Component } from 'react';
import Section from 'components/common/Section/Section';
import MaterialEditor from 'components/MaterialEditor/MaterialEditor';
import * as API from '../services/api';
import MaterialsInfo from 'components/MaterialsInfo/MaterialsInfo';
import Modal from 'components/common/Modal/Modal';

class App extends Component {
  state = {
    materials: [],
    materialId: null,
    isLoading: false,
    error: false,
    isOpenModal: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const response = await API.getMaterials();
      this.setState({ materials: response, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async value => {
    try {
      const material = await API.addMaterial(value);
      this.setState(pS => ({
        materials: [...pS.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(pS => ({
        materials: pS.materials.filter(item => item.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  // обновление
  updateMaterial = async value => {
    const data = {
      id: this.state.materialId,
      ...value,
    };
    try {
      const updateMaterial = await API.updateMaterial(data);
      this.setState(pS => ({
        materials: pS.materials.map(item => {
          if (item.id === updateMaterial.id) {
            return { ...item, ...updateMaterial };
          }
          return item;
        }),
        isOpenModal: false,
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  toggleModal = () => {
    this.setState(pS => ({
      isOpenModal: !pS.isOpenModal,
    }));
  };

  createMaterialId = id => {
    this.setState({
      materialId: id,
    });
  };

  render() {
    const { isLoading, materials, error, isOpenModal } = this.state;
    return (
      <>
        <Section title="Materials' students">
          <MaterialEditor onSubmit={this.addMaterial} textBtn="Add material" />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <MaterialsInfo
              items={materials}
              onDelete={this.deleteMaterial}
              onOpen={this.toggleModal}
              onCreateId={this.createMaterialId}
            />
          )}
          {error && <p>Error!</p>}
          {isOpenModal && (
            <Modal title="Update article" onToggle={this.toggleModal}>
              <MaterialEditor
                onSubmit={this.updateMaterial}
                textBtn="Update material"
              />
            </Modal>
          )}
        </Section>
      </>
    );
  }
}

export default App;
