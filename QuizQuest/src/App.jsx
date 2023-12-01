import { useState } from 'react';
import './App.css';

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


    // const geoURL = "https://opentdb.com/api.php?amount=4&category=22&type=multiple";
    // const artURL = "https://opentdb.com/api.php?amount=4&category=25&type=multiple";
    // const tvURL = "https://opentdb.com/api.php?amount=4&category=32&type=multiple";
    // const animalURL = "https://opentdb.com/api.php?amount=4&category=27&type=multiple";

    // let testVariableOne = [];
    // let testVariableTwo = [];
    // let testVariableThree = [];
    // let testVariableFour = [];

    // fetch(geoURL)
    //   .then((response) => { return response.json() })
    //   .then(function(apiResponse) {
    //     testVariableOne.push(apiResponse.results)
    //     console.log(testVariableOne)
    //     //setData(apiResponse.results)
    //   });

    // fetch(artURL)
    //   .then((response) => { return response.json() })
    //   .then(function(apiResponse) {
    //     testVariableTwo.push(apiResponse.results)
    //     console.log(testVariableTwo)
    //     //setData(apiResponse.results)
    // });

    // fetch(tvURL)
    //   .then((response) => { return response.json() })
    //   .then(function(apiResponse) {
    //     testVariableThree.push(apiResponse.results)
    //     console.log(testVariableThree)
    //     //setData(apiResponse.results)
    // });

    // fetch(animalURL)
    //   .then((response) => { return response.json() })
    //   .then(function(apiResponse) {
    //     testVariableFour.push(apiResponse.results)
    //     console.log(testVariableFour)
    //     //setData(apiResponse.results)
    // });

  }


  return (
    <>
      <button onClick={loadData}>Load API Data</button>
      <p>{String(category)}</p>
    </>
  );

//return (0);
}