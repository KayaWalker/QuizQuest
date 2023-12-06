//TO-DO IN QUESTION.JSX FILE
//Figure out how to randomize the order of the answer buttons
//Update the score when the correct button is selected
//Update the view to be the "next page" when any answer is selected

import {useState, useEffect} from 'react'


export default function Question({question, display, changeDisplay, incrementScore}){

    //The if-else statement below listens for the disply state to change and if there is data in question it will display the question and answers
    // otherwise it displays "No Question Loaded" for debugging. That text can be deleted for the final product.
    if (display == true){

        //Separates the question object into individual variables
        let writtenQuestion = question.question; //string
        let correctAnswer = question.correct_answer; //string
        let wrongAnswers = question.incorrect_answers; //array of strings of size 3

        return (
            <>
                <p dangerouslySetInnerHTML={{__html:writtenQuestion}}></p>
                <button dangerouslySetInnerHTML={{__html:correctAnswer}}></button>
                <button dangerouslySetInnerHTML={{__html:wrongAnswers[0]}}></button>
                <button dangerouslySetInnerHTML={{__html:wrongAnswers[1]}}></button>
                <button dangerouslySetInnerHTML={{__html:wrongAnswers[2]}}></button>
        
            </>
            
          );
    
    }else{
        return(
            <>
            <p>No Question Loaded In Yet</p>
            </>
        );
    }


}
