import PropTypes from 'prop-types';
import css from './RecipeInfo.module.css'
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineStars } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { CiWheat } from "react-icons/ci";

export const RecipeInfo = ({image, name, time, servings, calories, difficulty}) => {
    return (
        <li  className={css.recipe__item}>
            <img className={css.recipe__img} src={image} alt={name} />
            <h2 className={css.recipe__title}>{name}</h2>
            <p className={css.time}><IoTimeOutline size={25} className={css.recipe__icon} /><b>Cooking time: </b>{time} minutes</p>
            <p className={css.serving}><IoPeople size={25} className={css.recipe__icon}/><b>Serving for: </b> {servings} {servings > 1 ? 'people' : 'person'}</p>
            <p className={css.calories}><CiWheat size={25} className={css.recipe__icon} /><b>Calories: </b> {calories}kcal</p>
            <p className={css.difficulty}><MdOutlineStars size={25} className={css.recipe__icon} /><b>Cooking difficulty: </b> {difficulty} stars from 3</p>

        </li>
    )
}

RecipeInfo.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    servings: PropTypes.number,
    calories: PropTypes.number,
    difficulty: PropTypes.number
}