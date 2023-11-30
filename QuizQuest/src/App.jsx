import { useState } from 'react';
import './App.css';

export default function App() {
  const [score, updateScore] = useState(0);

  function incrementScore(){
    updateScore(score + 1)
  }

  const [data, setData] = useState([]);

  function loadData(){
    const url = "https://opentdb.com/api.php?amount=10";

    let testVariable;

    fetch(url)
      .then((response) => { return response.json() })
      .then(function(apiResponse) {
        testVariable = apiResponse
        console.log(testVariable)
        setData(apiResponse.results)
      });

    //return(console.log(testVariable))

  }

  // const url = "https://opentdb.com/api.php?amount=10";
  // //const [data, setData] = useState([]);

  // let testVariable

  // fetch(url)
  //   .then((response) => { return response.json() })
  //   .then(function(apiResponse) {
  //       setData(apiResponse)
  //       testVariable = apiResponse
  //       //displayBooks(data.works);
  // });

  // console.log(data)

  // function setData (data){
  //   console.log("Inside setData")
  // }

 //fetchInfo()

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  return (
    <>
      <button onClick={loadData}>Load API Data</button>
      <p>{data}</p>
    </>
  );

//return (0);
}