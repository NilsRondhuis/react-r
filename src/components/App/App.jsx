import Section from 'components/common/Section/Section';
import EditorForm from 'components/EditorForm/EditorForm';
import ListProducts from 'components/ListProducts/ListProducts';
import { useAddProductsMutation } from 'redux/productsApi';

const App = () => {
  const [addProduct, { isLoading }] = useAddProductsMutation();

  const onCreateProduct = newProduct => {
    addProduct(newProduct);
  };

  return (
    <>
      <Section title="Products with RTK-query">
        <EditorForm
          btnText={isLoading ? 'Add...' : 'Add'}
          onSubmit={onCreateProduct}
        />
        <ListProducts />
      </Section>
    </>
  );
};

export default App;
