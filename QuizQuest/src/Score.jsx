import { useState } from 'react';
import Category from './Category.jsx';

export default function Score({category, answer}){
   const[pointsAll, updateScoreAll] = useState(0);
   const[points1, updateScore1] = useState(0);
   const[points2, updateScore2] = useState(0);
   const[points3, updateScore3] = useState(0);
   const[points4, updateScore4] = useState(0);

    function incrementScore(category, answer){
        if(category == "one" && answer == 1){
            updateScore1(points1 + 1);
        }
        else if(category == "two" && answer == 1){
            updateScore2(points2 + 1);
        }
        else if(category == "three" && answer == 1){
            updateScore3(points3 + 1);
        }
        else if(category == "four" && answer == 1){
            updateScore4(points4 + 1);
        }
        updateScoreAll(pointsAll = points1 + points2 + points3 + points4);
    }

    return(
        <>
        <Category category={one} answer={answer} points={points1}></Category>
        <Category category={two} answer={answer} points={points2}></Category>
        <Category category={three} answer={answer} points={points3}></Category>
        <Category category={four} answer={answer} points={points4}></Category>
        <Category category={overall} answer={answer} points={pointsAll}></Category>
        </>
    );
}

