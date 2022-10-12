import React from 'react';

const ErrorPage = () => {
    return (
        <div className='mt-20'>
            <p className='text-xl mb-3'>Oops...occured an <span className='text-red-500'>Error</span></p>
            <p className='text-3xl font-semibold'><span className='text-red-500'>404</span> ! Page NOT Found</p>
        </div>
    );
};

export default ErrorPage;