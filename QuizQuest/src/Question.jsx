//TO-DO IN QUESTION.JSX FILE

export default function Question({question, display, answerOrder, changeDisplay, updateScore, changeMode, checkCorrect, incrementCount}){

   

    //The if-else statement below listens for the disply state to change and if there is data in question it will display the question and answers
    // otherwise it displays "No Question Loaded" for debugging. That text can be deleted for the final product.
    if (display == true){

        //Separates the question object into individual variables
        let writtenCategory = question.category; //string
        let writtenQuestion = question.question; //string
        let correctAnswer = question.correct_answer; //string
        let wrongAnswers = question.incorrect_answers; //array of strings of size 3

        //Combines all of the answers into one array
        let allAnswers = wrongAnswers;
        //The if statment is here to make sure the correct answer is only added to the array once because there is a bug that will add it multiple times if this isnt' here
        if(!allAnswers.includes(correctAnswer)){
            allAnswers.push(correctAnswer);
        }
        
           console.log(allAnswers);

        //This is the array order in which to display the answers
        let order = answerOrder;

        //function that checks for the correct answer
        //Gets passed in the answer that was selected by the user
        function checkForCorrectAnswer(answer){

            setTimeout(() => {
            
            changeDisplay(false);
            changeMode(false);
            incrementCount();

            if(answer == correctAnswer){ //calls update score
                updateScore()
                console.log("Correct Score")
                checkCorrect(true)
            }else{
                console.log("Wrong Answer")
                checkCorrect(false)
            }

            }, 1000);
        }

        //Returns the question and the four answer options in random order
        if(display == true){
            return (
                <>
                    <h1 class='category' dangerouslySetInnerHTML={{__html:writtenCategory}}></h1>
                    <p class='question' dangerouslySetInnerHTML={{__html:writtenQuestion}}></p>
                    <div class='container'>
                        <button class='child' dangerouslySetInnerHTML={{__html:allAnswers[order[0]]}} onClick={()=>checkForCorrectAnswer(allAnswers[order[0]])}></button>
                        <button class='child' dangerouslySetInnerHTML={{__html:allAnswers[order[1]]}} onClick={()=>checkForCorrectAnswer(allAnswers[order[1]])}></button>
                        <button class='child' dangerouslySetInnerHTML={{__html:allAnswers[order[2]]}} onClick={()=>checkForCorrectAnswer(allAnswers[order[2]])}></button>
                        <button class='child' dangerouslySetInnerHTML={{__html:allAnswers[order[3]]}} onClick={()=>checkForCorrectAnswer(allAnswers[order[3]])}></button>
                    </div>
                    
                </>
                
            );    
        }

    }
    else return null;
}
