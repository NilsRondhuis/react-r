import PropTypes from "prop-types";
import defaultImg from "../../../images/default.png";
import { BsPersonFill } from "react-icons/bs";
import {
  Card,
  BoxImg,
  Title,
  Text,
  BoldText,
  Accessibility,
  Button,
} from "./Painting.styled";

function Painting(props) {
  const { imgUrl = defaultImg, title, price, author, quantity } = props;
  return (
    <Card>
      <BoxImg>
        <img
          src={imgUrl ?? defaultImg}
          width="480"
          alt={title}
          loading="lazy"
        />
      </BoxImg>
      <Title>{title}</Title>
      <Text>
        <BsPersonFill />
        <BoldText>Autor:</BoldText> {author}
      </Text>
      <Text>
        <BoldText>Price:</BoldText> {price}
      </Text>
      <Text>
        <BoldText>Accessibility:</BoldText>{" "}
        <Accessibility quantity={quantity}>
          {quantity >= 10 ? "Есть в наличии" : "Заканчивается"}
        </Accessibility>
      </Text>
      <Button type="button">Add to cart</Button>
    </Card>
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
