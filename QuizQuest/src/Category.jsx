import { useState } from 'react';

export default function Category({category}){

    const [question, changeQuestion] = useState({});

    function load(){
        const URL = `https://opentdb.com/api.php?amount=1&category=${category}&type=multiple`;

        fetch(URL)
          .then((response) => { return response.json() })
          .then(function(apiResponse) {
            changeQuestion(apiResponse.results[0])
            console.log(apiResponse.results[0])
          });
    }
    
    
    
    return(
        <button onClick={load}>Load Question</button>
    );

}
