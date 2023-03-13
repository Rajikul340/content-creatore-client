import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetSingleContent } from '../redux/thunk/getSingleContent';

const Card = ({data}) => {

      const dispatch= useDispatch();


    return (
        <div className="card bg-base-100 shadow-xl ">
        <figure><img src={data.Image} alt="cover" className='md:h-52 h-80'/></figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description.slice(0, 200)}</p>
          <div className="card-actions justify-end">
           <Link to={`/home/:${data._id}`} >  <button onClick={()=>dispatch(GetSingleContent(data._id))} className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Card;