import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './ProductList.module.css';
import productImg from '../../images/default.png';

const ProductList = ({ products }) => {
  const location = useLocation();
  return (
    <ul>
      {products.map(({ id, name }) => (
        <li key={id} className={css.item}>
          <Link to={`${id}`} state={{ from: location }}>
            <img src={productImg} alt={name} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
