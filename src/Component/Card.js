import React from 'react';

const Card = ({data}) => {
    console.log(data);
    return (
        <div className="card bg-base-100 shadow-xl  border border-red-400">
        <figure><img src={data.Image} alt="Shoes" className='Md:h-52 h-80'/></figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description.slice(0, 200)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default Card;