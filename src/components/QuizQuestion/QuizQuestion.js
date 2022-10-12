import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEyeDropper, faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Option from '../Option/Option';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({ singleQuestion, quizNumber }) => {
    const { question, options, correctAnswer } = singleQuestion;
    // console.log(id);
    const handleQuizAnswer = (answer) => {
        toast('yes'
            , {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        )
    }
    return (
        <div className='bg-accent text-white m-5 p-10 rounded-xl shadow-lg'>
            <div className='flex items-center justify-between mb-5'>
                <h4 className='text-2xl font-semibold mr-5'>Quiz {quizNumber}: {question}</h4>
                <button onClick={() => handleQuizAnswer(correctAnswer)}>
                    <FontAwesomeIcon
                        icon={faEye}
                        className='text-white'
                    ></FontAwesomeIcon>
                </button>
                <ToastContainer></ToastContainer>
            </div>
            {
                options.map((option, index) => <Option
                    key={index}
                    option={option}
                    quizNumber={quizNumber}
                    correctAnswer={correctAnswer}
                ></Option>)
            }
        </div>
    );
};

export default QuizQuestion;