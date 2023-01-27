import React from 'react';
import PropTypes from 'prop-types';
import { useGetProductsQuery } from 'redux/productsApi';
import ProductCard from 'components/ProductCard/ProductCard';
import css from './ListProducts.module.css';

const ListProducts = props => {
  const { data, error, isFetching } = useGetProductsQuery();

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {data && (
        <ul className={css.list}>
          {data.map(product => {
            return (
              <li className={css.item} key={product.id}>
                <ProductCard product={product} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

ListProducts.propTypes = {};

export default ListProducts;
