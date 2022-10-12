import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, quizNumber, correctAnswer }) => {
    // console.log(option)

    const handleAnswer = (e) => {
        // console.log(e.target.value);
        // console.log(correctAnswer);
        const givenAnswer = e.target.value;
        if (givenAnswer === correctAnswer) {
            toast.success('Correct Answer !!!'
                , {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }
            );
        }
        else {
            toast.error('Wrong Answer !!!'
                , {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }
            );
        }
    }

    return (
        <div className='flex m-2 items-center text-lg'>
            <label><input type="radio" name={quizNumber} className='mr-2' value={option} onClick={handleAnswer} />{option}</label>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;