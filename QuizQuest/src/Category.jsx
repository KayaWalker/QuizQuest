
import { useState } from 'react';
import Question from './Question';

export default function Category({updateScore, changeMode, start, resetScore}){
    
    const [ count, setCount ] = useState(0);
    
    function incrementCount(){
        setCount(count +1);
    }

    const [end, gameFinished] = useState(false);

    //Sets the question state. 
    //question is an object read in from the API
    const [question, changeQuestion] = useState({});

    //Sets the question display state
    //This determines if the question and answer buttons will be displayed
    const [display, changeDisplay] = useState(false);

    //Sets the answer order array state
    const [answerOrder, changeAnswerOrder] = useState([]);

    const [correct, checkCorrect] = useState(false);

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
    //1 second delay
    function load(){

        setTimeout(() => {
            
            //Randomizes the order of answers for the question
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

            // setCount(count + 1); //Keeping track of the number of questions in the game
            console.log('counter:')
            console.log(count);
        }, 1000);
        
    }

    //Function to reset the game
    function restartGame(){
        changeMode(true); //changes the display to go back to the start
        setCount(0); // Resets the counter for question numbers
        resetScore(); //Resets score to zero
    }
    
    if (display == false) {
        if(start == true){ //The start screen
            return(
                <>
                <h1>Quiz Quest</h1>
                <div>
                    <button id="mainBtn" onClick={load}>Start</button>
                </div>
                </>
            );
        } else {
            if(count > 6){ //End screen that cycles back to main screen
                if(correct){
                    return(
                        <>

                            <h1>Correct</h1>
                            <div>
                                <h1>The end.</h1>
                            
                                <button id="mainBtn" onClick={restartGame}>Restart</button>
                            </div>
                        </>
                    );
                }else{
                    return(
                        <>
                            <h1>Incorrect</h1>
                            <div>
                                <h1>The end.</h1>
                            
                                <button id="mainBtn" onClick={restartGame}>Restart</button>
                            </div>
                        </>
                    );
                }
                
                
            }
            if (correct) { //correct answer screen
                return(
                    <>
                    <h1>Correct</h1>
                    <div>
                        <button id="mainBtn" onClick={load}>Next Question</button>
                    </div>
                    </>
                );
            } else { //wrong answer screen
                return(
                    <>
                    <h1>Incorrect</h1>
                    <div>
                        <button id="mainBtn" onClick={load}>Next Question</button>
                    </div>
                    </>
                );
            }

        }


    } else {
        return(
            <div>
             <Question 
             question={question} 
             display={display} 
             answerOrder={answerOrder} 
             changeDisplay={changeDisplay} 
             updateScore={updateScore}
             changeMode={changeMode}
             checkCorrect={checkCorrect}
             incrementCount={incrementCount}
             />
            </div>
        );
    }
}
