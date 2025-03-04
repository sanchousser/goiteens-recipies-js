import { RecipeInfo } from "../RecipeInfo/RecipeInfo"


export const Recipe = ({ recipe }) => {
  return (<ul>
    {recipe.map(({name, image, time, servings, calories, difficulty}) => {
      return <RecipeInfo name={name} imageUrl={image} time={time} servings={servings} calories={calories} difficulty={difficulty}/>
    })}
  </ul>)
}