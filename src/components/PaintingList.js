import PropTypes from "prop-types";
import Painting from "./Painting";

function PaintingList({ arr }) {
  return (
    <ul>
      {arr.map(({ id, url, title, price, author, quantity }) => (
        <li key={id}>
          <Painting
            imgUrl={url}
            title={title}
            price={price}
            author={author.tag}
            quantity={quantity}
          />
        </li>
      ))}
    </ul>
  );
}

Painting.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default PaintingList;
