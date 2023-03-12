import React from 'react';
import { useDispatch } from 'react-redux';
import deleteProduct from '../redux/thunk/DeleteContent';

const ListItems = ({data, index}) => {
      console.log(data);
      const dispatch= useDispatch()
    return (
        <tr>
        <th>{index+1}</th>
        <td><img className='w-8 h-8' src={data.Image} alt="img"/></td>
        <td>{data.title}</td>
        <td>{data.description.slice(0, 20)}</td>
         <td>
            <button className='mx-3 btn btn-sm btn-outline'>Edit</button>
            <button
              onClick={() => dispatch(deleteProduct(data._id))}
            className=' btn btn-sm btn-outline'>Delete</button>
         </td>
         
      </tr>
    );
};

export default ListItems;