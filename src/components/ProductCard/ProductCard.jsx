import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from 'redux/productsApi';
import Modal from 'components/common/Modal/Modal';
import EditorForm from 'components/EditorForm/EditorForm';
import css from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const [toggle, setToggle] = useState(false);
  const [productId, setProductId] = useState(null);
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = value => {
    const data = {
      id: productId,
      name: value,
    };
    updateProduct(data);
    handleToggle();
  };

  return (
    <div>
      <div>
        <p>
          <b>Name:</b> {product.name}
        </p>
        <p>
          <b>Date:</b> {product.created}
        </p>
      </div>
      <div>
        <button
          type="button"
          className={css.btn}
          disabled={isLoading}
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>
        <button
          type="button"
          className={css.btn}
          onClick={() => {
            handleToggle();
            setProductId(product.id);
          }}
        >
          Edit
        </button>
      </div>
      {toggle && (
        <Modal onToggle={handleToggle}>
          <EditorForm btnText="Edit" onSubmit={handleSubmit} />
        </Modal>
      )}
    </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
