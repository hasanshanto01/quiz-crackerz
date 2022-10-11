import React from 'react';

const Option = ({ option, quizNumber }) => {
    // console.log(option)
    return (
        <div className='flex m-2 items-center text-lg'>
            <input type="radio" name={quizNumber} className="" />
            <h2 className='ml-3'>{option}</h2>
        </div>
    );
};

export default Option;