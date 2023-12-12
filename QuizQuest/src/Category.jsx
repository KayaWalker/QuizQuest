//TO-DO IN CATEGORY.JSX FILE

import { useState } from 'react';
import Question from './Question';

export default function Category({updateScore}){
    
    //Sets the question state. 
    //question is an object read in from the API
    const [question, changeQuestion] = useState({});

    //Sets the question display state
    //This determines if the question and answer buttons will be displayed
    const [display, changeDisplay] = useState(false);

    //Sets the answer order array state
    const [answerOrder, changeAnswerOrder] = useState([]);

    //Category numbers for calling the API
    const categories = [22,25,32,27];

    //Returns a random integer between min and max
    //The maximum is exclusive and the minimum is inclusive
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }

    //randomizes the order of the array with values 0-3 to be passed down into questions 
    function getRandomArrayIndex() {
        let array = [];
        for (var a = [0, 1, 2, 3], i = a.length; i--; ) {
            var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            console.log(random);
            array.push(random);
        }
        return array;
    }
    
    //Called when the button is pressed
    //Calls the API for a random category and sets the question state
    function load(){

        let order = getRandomArrayIndex();

        changeAnswerOrder(order);

        //The code section below sets the URL for the API for a random category
        let categoryIndex = getRandomInt(0,4);
        let category = categories[categoryIndex];
        const URL = `https://opentdb.com/api.php?amount=1&category=${category}&type=multiple`;

        //Calling the API
        fetch(URL)
          .then((response) => { return response.json() })
          .then(function(apiResponse) {
            changeQuestion(apiResponse.results[0]) //sets the question state
            console.log(apiResponse.results[0])
            changeDisplay(true) //sets the question display state
          });
        
    }
    
    
    
    return(
        <>
            <h1>Quiz Quest</h1>
            <Question question={question} display={display} answerOrder={answerOrder} changeDisplay={changeDisplay} updateScore={updateScore}/>
            <button id="mainBtn" onClick={load}>Load Question</button>
            
        </>
        
    );

}
