import PropTypes from 'prop-types';


export const RecipeInfo = ({imageUrl, name, time, servings, calories, difficulty}) => {
    return (
        <li>
            <img src={imageUrl} width='400' alt={name} />
            <h2>{name}</h2>
            <p><b>Cooking time: </b>{time} minutes</p>
            <p><b>Serving for: </b>{servings} {servings > 1 ? 'people' : 'person'}</p>
            <p><b>Calories: </b>{calories}kcal</p>
            <p><b>Cooking difficulty: </b>{difficulty}stars from 3</p>

        </li>
    )
}

RecipeInfo.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    servings: PropTypes.number,
    calories: PropTypes.number,
    difficulty: PropTypes.number
}