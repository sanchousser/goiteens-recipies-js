import PropTypes from "prop-types"
import styled from 'styled-components';
import { RecipeInfo } from "../RecipeInfo/RecipeInfo"

const List = styled.ul`
     display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    gap: 20px;
`


export const Recipe = ({ recipe }) => {
  return (
    <List>
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
    </List>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.array
}