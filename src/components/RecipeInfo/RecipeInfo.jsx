import PropTypes from 'prop-types';
import styled from 'styled-components';

import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineStars } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { CiWheat } from "react-icons/ci";

const Item = styled.li`
      border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    max-width: 300px;
`;

const Image = styled.img`
        width: 300px;
    height: auto;
    border: 0px solid;
    border-radius: 10px;
`

const Title = styled.h2`
    font-size: 22px;
`

const DescrText = styled.p`
        display: flex;
    align-items: center;
    gap: 5px;
    svg {
    margin-right: 8px;
  }
`

const Difficulty = styled.span`
    background-color: #FF8096;
    padding: 3px;
    border-radius: 7px;
    color: white;
    font-weight: bold;
`

export const RecipeInfo = ({ image, name, time, servings, calories, difficulty }) => {
    return (
        <Item>
            <Image src={image} alt={name} />
            <Title>{name}</Title>
            <DescrText><IoTimeOutline  /><b>Cooking time: </b>{time} minutes</DescrText>
            <DescrText><IoPeople  /><b>Serving for: </b> {servings} {servings > 1 ? 'people' : 'person'}</DescrText>
            <DescrText><CiWheat  /><b>Calories: </b> {calories}kcal</DescrText>
            <DescrText><MdOutlineStars  /><b>Cooking difficulty: </b><Difficulty>{difficulty === 1 ? 'Easy' : difficulty === 2 ? 'Medium' : 'Hard'}</Difficulty></DescrText>

        </Item>
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