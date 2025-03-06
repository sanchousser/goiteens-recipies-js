import PropTypes from "prop-types"
import { RecipeInfo } from "../RecipeInfo/RecipeInfo"
import css from './Recipe.module.css'

export const Recipe = ({ recipe }) => {
  return (
    <ul className={css.recipe__list}>
      {recipe.map(({ image, name, time, servings, calories, difficulty}, index) => {
        return <RecipeInfo
          key={index}
          image={image}
          name={name}
          time={time}
          servings={servings}
          calories={calories}
          difficulty={difficulty}
        />
      })}
    </ul>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.array
}