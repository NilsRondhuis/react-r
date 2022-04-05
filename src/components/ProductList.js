import PropTypes from "prop-types";
import Product from "./Product";

export default function ProductList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Product
              id={item.id}
              img={item.img}
              name={item.name}
              desc={item.desc}
              price={item.price}
              quantity={item.quantity}
            />
          </li>
        );
      })}
    </ul>
  );
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
