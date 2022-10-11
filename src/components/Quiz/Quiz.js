import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const loadQuizData = useLoaderData();
    const { data } = loadQuizData;
    const { name, questions } = data;
    // const [quizNumber,setQuizNumber]=useState(1);
    // // console.log(questions);
    // useEffect(()=>{

    // },[])
    // console.log(name)
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold text-accent'>Quiz on {name}</h2>
            <div className='w-3/4 mx-auto mt-10'>
                {
                    questions.map((singleQuestion, quizNumber) => <QuizQuestion
                        key={singleQuestion.id}
                        singleQuestion={singleQuestion}
                        quizNumber={quizNumber + 1}
                    ></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default Quiz;