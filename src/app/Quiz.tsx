'use client'
import React, {useState, useEffect, SetStateAction} from 'react'
import { ReviewData } from './ReviewData'
import { Question } from './Question'
import { Answer } from './Answer'
import { Score } from './Score'
import { exit } from 'process'
function shuffle(array:any[]){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    
}
const highlightFunction = (status:boolean) => {
    return status ? 'green' : 'red';

}

type selectedOptionTuple = [string, boolean]
interface QuizProps {
    QuestionContent: string[][];
    numRequested: number;
}
export function Quiz(props: QuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<selectedOptionTuple>(["", false]);
    const [responses, setResponse] = useState<selectedOptionTuple[]>([]);
    const [showReview, setReview] = useState<boolean>(false);
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(-1);
    const [done, finish] = useState<boolean>(false);
    const [quizQuestions, setQuizQuestions] = useState<string[][]>([]);
    const { QuestionContent, numRequested } = props;

    

    useEffect(() => { 
        const shuffledQuestions = shuffle(QuestionContent);
        if(numRequested >= shuffledQuestions.length)
            setQuizQuestions(shuffledQuestions);
        else{
            setQuizQuestions(shuffledQuestions.slice(0, numRequested));
        }
    }, [QuestionContent, numRequested])
    

    const handleOptionSelect = (selectedOption: selectedOptionTuple) => {
        setSelectedOption(selectedOption);
        
    };

    const goToNextQuestion = () => {
        setResponse(prevResponses => {
            const updatedResponses = [...prevResponses];
            updatedResponses[currentQuestionIndex] = selectedOption;
            return updatedResponses;
        });
        setSelectedOption(["", false]);
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    const goToPreviousQuestion = () => {
        setResponse(prevResponses => {
            const updatedResponses = [...prevResponses];
            updatedResponses[currentQuestionIndex] = selectedOption;
            return updatedResponses;
        });
        setSelectedOption(["", false])
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    };

    const handleSubmit = () => {
        
        setResponse(prevResponses => {
            const updatedResponses = [...prevResponses];
            updatedResponses[currentQuestionIndex] = selectedOption;
            return updatedResponses;
        });
        // Handle submission logic here
        setReview(true)
        finish(true)
    };
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    const goToNextAnswer = () => {
        setCurrentAnswerIndex(prevIndex => prevIndex +1) 

    }
    const goToPreviousAnswer = () => {
        setCurrentAnswerIndex(prevIndex => prevIndex -1)

    }


    const reviewScreen = <div>    
        
        
        <div>
            <h2>Review</h2>
            {<Score responses={responses}/>}
            {quizQuestions && responses && 
            <ReviewData responses={responses} questions={quizQuestions} highlightFunction={highlightFunction}/>}
        </div>

    </div>

    return (
        <div className=''> 
    <div className=""> {/* Adjust max-width according to your layout */}
        {currentAnswerIndex > -1 && <h4 id="answer-counter">question number: {currentAnswerIndex+1} / {quizQuestions.length}</h4>}
        <div>
            {!done && (
                <div id="question-view" className=''>
                    {currentQuestion && (
                        <div>
                            <h4 id="question-counter"> question number: {currentQuestionIndex + 1} / {quizQuestions.length}</h4>
                            <Question
                                body={currentQuestion}
                                setSelectedOption={handleOptionSelect}
                            />
                        </div>
                    )}
                </div>
            )}
            {!done && (
                <div id="next-previous" className='mt-6'>
                    {currentQuestionIndex !== 0 && !showReview && (
                        <button className="btn bg-accent text-success mr-1" id="previous-button" onClick={goToPreviousQuestion}>Previous</button>
                    )}
                    {currentQuestionIndex < quizQuestions.length - 1 && !showReview && (
                        <button className="btn btn-accent text-success" id="next-button" onClick={goToNextQuestion}>Next</button>
                    )}
                    {currentQuestionIndex === quizQuestions.length - 1 && !showReview && (
                        <button className="btn bg-accent text-success" id="submit-button" onClick={handleSubmit}>Submit</button>
                    )}
                </div>
            )}
        </div>

        <div id="review">
            {showReview && currentAnswerIndex === -1 && (
                <div>
                    {reviewScreen}
                </div>  
            )}
        </div>
        <div id="answer">
            {currentAnswerIndex>-1 && (
                <Answer 
                    question={quizQuestions[currentAnswerIndex]}
                    response={responses[currentAnswerIndex]}
                />
            )}
        </div>
        <div id="next-previous-answer" className='mt-6'>
            {done && currentAnswerIndex > -1 && (
                <button className="btn btn-accent mr-1" id="previous-button" onClick={goToPreviousAnswer}>Previous</button>
            )} 
            {done && currentAnswerIndex < responses.length -1 && (
                <button className="btn btn-accent" id="next-button" onClick={goToNextAnswer}>Next</button>
            )}
        </div>
    </div>
</div>

    );
}


export default Quiz;