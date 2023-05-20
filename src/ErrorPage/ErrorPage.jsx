import React from 'react';

const ErrorPage = () => {
    return (
        <div className='absolute top-[40%] left-[40%]'>
            <div>
                <h1 className='text-9xl text-red-600'>404</h1>
                <p className='text-4xl text-red-400 text-right'>Error</p>
            </div>
        </div>
    );
};

export default ErrorPage;