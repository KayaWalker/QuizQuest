//TO-DO IN IDK WHICH FILE
//Figure out an end screen when the score reaches like 10?


import { useState } from 'react';
import './App.css';
import Category from './Category';

export default function App() {
  // const [color, setColor] = useState("pink");
  // document.body.style.backgroundColor = color;
  
  //Sets the score state
  const [score, updateScore] = useState(0);

  const [start, changeMode] = useState(true);

  //function to update the score
  //This function should be passed down into Category.jsx to be then passed to Question.jsx
  function incrementScore(){
    updateScore(score + 1);
  }

  //Resets the score to zero
  function resetScore(){
    updateScore(0);
  }

  if (start) {
    return (
      <>
        <Category updateScore={incrementScore} changeMode={changeMode} start={start} resetScore={resetScore}></Category>
      </>
    );
  } else {
    return (
      <>
        <Category updateScore={incrementScore} changeMode={changeMode} start={start} resetScore={resetScore}></Category>
        <p id='score'>Score: {score}</p>
      </>
    );
  }
}