//TO-DO IN IDK WHICH FILE
//Figure out welcome screen (note I'm 90% sure that the Category.jsx button can be used as the start and next button)
//Figure out next screen (note I'm 90% sure that the Category.jsx button can be used as the start and next button)
//Figure out an end screen when the score reaches like 10?

//TO-DO IN APP.JSX FILE
//Display score


import { useState } from 'react';
import './App.css';
import Category from './Category';

export default function App() {
  // const [color, setColor] = useState("pink");
  // document.body.style.backgroundColor = color;
  
  //Sets the score state
  const [score, updateScore] = useState(0);

  //function to update the score
  //This function should be passed down into Category.jsx to be then passed to Question.jsx
  function incrementScore(){
    updateScore(score + 1);
  }

  return (
    <>
      <Category updateScore={incrementScore}></Category>
      <p id='score'>Score:{score}</p>
    </>
  );
}