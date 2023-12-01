import { useState } from 'react';
import './App.css';
import Category from './Category';

export default function App() {
  const [score, updateScore] = useState(0);

  function incrementScore(){
    updateScore(score + 1)
  }

  const [category, setCategory] = useState(0);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function loadData(){
      const categories = [22,25,32,27];

      let newCategory = getRandomInt(0,4);
      console.log(newCategory);

      setCategory(categories[newCategory])
  }


  return (
    <>
      <button onClick={loadData}>Load API Data</button>
      <Category category ={category}></Category>
      <p>{String(category)}</p>
    </>
  );
}