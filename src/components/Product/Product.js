import PropTypes from "prop-types";
import "./Product.css";
import defaultImg from "../../images/default.jpg";

export default function Product({
  id,
  img = defaultImg,
  name,
  desc,
  price,
  quantity,
}) {
  return (
    <>
      <p>ID: {id}</p>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity < 10 ? "min" : "max"}</p>
    </>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
