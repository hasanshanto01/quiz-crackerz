import React from 'react';
import Option from '../Option/Option';

const QuizQuestion = ({ singleQuestion, quizNumber }) => {
    const { question, options, correctAnswer } = singleQuestion;
    // console.log(options);
    return (
        <div className='bg-accent text-white m-5 p-5 rounded-xl shadow-lg'>
            <h4 className='text-2xl font-semibold mb-5'>Quiz {quizNumber}: {question}</h4>
            {
                options.map((option, index) => <Option
                    key={index}
                    option={option}
                    quizNumber={quizNumber}
                ></Option>)
            }
        </div>
    );
};

export default QuizQuestion;