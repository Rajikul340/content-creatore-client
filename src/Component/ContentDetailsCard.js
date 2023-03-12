import React from 'react';
import { Link } from 'react-router-dom';

const ContentDetailsCard = ({data}) => {
    return (
        <div className="card bg-base-100 shadow-xl  border border-red-400">
          <h1>{data.tilte}</h1>
      </div>
    );
};

export default ContentDetailsCard;