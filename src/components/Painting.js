import PropTypes from "prop-types";
import defaultImg from "../images/default.png";

function Painting(props) {
  const { imgUrl = defaultImg, title, price, author, quantity } = props;
  return (
    <div>
      <img src={imgUrl ?? defaultImg} width="480" alt={title} />
      <h2>{title}</h2>
      <p>Autor: {author}</p>
      <p>Price: {price}</p>
      <p>
        Accessibility: {quantity >= 10 ? "Есть в наличии" : "Заканчивается"}
      </p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Painting.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
