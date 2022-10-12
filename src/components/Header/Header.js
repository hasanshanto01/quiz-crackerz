import React from 'react';
import img from '../../images/quiz-bg.jpg';

const Header = () => {
    return (
        <div className='relative'>
            <img src={img} alt="" className='w-full h-80 mx-auto' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
                <h2 className='text-4xl'>Welcome To Quizzora !!!</h2>
                <p className='text-xl'>"Here, you can  test your knowledge on available topics"</p>
            </div>
        </div>
    );
};

export default Header;