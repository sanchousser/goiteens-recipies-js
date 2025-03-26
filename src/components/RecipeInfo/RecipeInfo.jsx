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
    text-align: center;
`

const DescrText = styled.p`
        display: flex;
    align-items: center;
    gap: 5px;
    svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`

const DifficultyList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 35px;
    border-radius: 15px;
    padding-inline-start: 0px;

`

const Difficulty = styled.span`
    background-color: #FFB6C1;
    padding: 4px;
    border-radius: 7px;
    color: black;
    font-weight: bold;
`

const RecipeDifficulty = styled(Difficulty)`
    background-color: #9F2B68;
    color: white;
`


export const RecipeInfo = ({ image, name, time, servings, calories, difficulty }) => {
    return (
        <Item>
            <Image src={image} alt={name} />
            <Title>{name}</Title>
            <DescrText><IoTimeOutline /><b>Cooking time: </b>{time} minutes</DescrText>
            <DescrText><IoPeople /><b>Serving for: </b> {servings} {servings > 1 ? 'people' : 'person'}</DescrText>
            <DescrText><CiWheat /><b>Calories: </b> {calories}kcal</DescrText>
            <DescrText><MdOutlineStars /><b>Cooking difficulty: </b></DescrText>

            {(() => {
                if (difficulty === 1) {
                    return <DifficultyList>
                        <RecipeDifficulty>Easy</RecipeDifficulty><Difficulty>Medium</Difficulty><Difficulty>Hard</Difficulty>
                    </DifficultyList>;
                } else if (difficulty === 2) {
                    return <DifficultyList>
                        <Difficulty>Easy</Difficulty><RecipeDifficulty>Medium</RecipeDifficulty><Difficulty>Hard</Difficulty>
                    </DifficultyList>;
                } else {
                    return <DifficultyList>
                        <Difficulty>Easy</Difficulty><Difficulty>Medium</Difficulty><RecipeDifficulty>Hard</RecipeDifficulty>
                    </DifficultyList>;
                }
            })()}


            {/* <Difficulty>{difficulty === 1 ? 'Easy' : difficulty === 2 ? 'Medium' : 'Hard'}</Difficulty> */}

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