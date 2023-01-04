import { useSearchParams } from 'react-router-dom';
import Section from 'components/common/Section/Section';
import ProductList from 'components/ProductList/ProductList';
import SearchBox from 'components/SearchBox/SearchBox';
import { getProducts } from 'components/services/fakeAPI';

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };
  return (
    <main>
      <Section title="Prodcuts">
        <SearchBox value={productName} onChange={updateQueryString} />
        <ProductList products={visibleProducts} />
      </Section>
    </main>
  );
};

export default Products;
