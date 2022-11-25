import PropTypes from "prop-types";
import { AiFillPieChart } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const Recipe = ({
  recipe: { name, time, servings, calories, image, difficulty },
}) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} width="350" />
      </div>
      <h2>{name}</h2>

      <div>
        <div>
          <BiTimeFive />
          <span>{time} min</span>
        </div>
        <div>
          <AiFillPieChart />
          <span>{servings} servings</span>
        </div>
        <div>
          <BsBarChartFill />
          <span>{calories} calories</span>
        </div>
      </div>

      <h3>Difficulty</h3>
      <div>
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
      </div>
    </div>
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
