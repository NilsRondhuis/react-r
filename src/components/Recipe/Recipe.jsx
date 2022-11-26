import PropTypes from "prop-types";
import { AiFillPieChart } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import {
  Card,
  BoxImage,
  CardTitle,
  BoxInfo,
  ItemInfo,
  ListDifficulty,
  ItemDifficulty,
} from "./Recipe.styled";

const Recipe = ({
  recipe: { name, time, servings, calories, image, difficulty },
}) => {
  return (
    <Card>
      <BoxImage>
        <img src={image} alt={name} width="350" loading="lazy" />
      </BoxImage>
      <CardTitle>{name}</CardTitle>

      <BoxInfo>
        <ItemInfo>
          <BiTimeFive />
          <span>{time} min</span>
        </ItemInfo>
        <ItemInfo>
          <AiFillPieChart />
          <span>{servings} servings</span>
        </ItemInfo>
        <ItemInfo>
          <BsBarChartFill />
          <span>{calories} calories</span>
        </ItemInfo>
      </BoxInfo>

      <CardTitle>Difficulty</CardTitle>
      <ListDifficulty>
        <ItemDifficulty difficulty={difficulty}>Easy</ItemDifficulty>
        <ItemDifficulty difficulty={difficulty}>Medium</ItemDifficulty>
        <ItemDifficulty difficulty={difficulty}>Hard</ItemDifficulty>
      </ListDifficulty>
    </Card>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.string,
  }).isRequired,
};

export default Recipe;
