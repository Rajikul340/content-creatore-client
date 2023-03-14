import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center text-xl mt-40'>
            <h1 >page not found</h1>
              <p className='font-bold'>404</p>
               <Link className='text-blue-500' to="/">Back to home</Link>
        </div>
    );
};

export default ErrorPage;