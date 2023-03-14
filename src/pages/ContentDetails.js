import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ContentDetails = () => {

  const content = useSelector((state) => state.content);
  const {  loading, contentData } = content;
//  console.log(contentData);
 
 if(loading) return <p>Loading...</p>
    return (
        <div>
          <h1 className='md:text-4xl text-2xl font-bold py-2'>{contentData?.title} </h1>
           <img src={contentData?.Image} alt="img"/>
           <p className='py-4'>{contentData.description}</p>
           {
             loading ? <p>Loading....</p> :  <Link className='text-blue-600 my-4' to="/">back to home</Link>
           }
        </div>
    );
};

export default ContentDetails;