import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdatePage from "../dashboard/UpdatePage";
import deleteProduct from "../redux/thunk/DeleteContent";


const ListItems = ({ data, index, handleGetId }) => {

  const dispatch = useDispatch();

  const content = useSelector((state) => state.content.updateData);
 

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-8 h-8" src={data.Image} alt="img" />
      </td>
      <td>{data.title}</td>
      <td>{data.description.slice(0, 20)}</td>
      <td className="flex gap-2">
      <label onClick={()=>handleGetId(data._id)}  htmlFor="my-modal-3" className="btn btn-sm btn-outline">
       Edit
      </label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
            {
              content && content.map(data=><UpdatePage data={data}/>)
            }
        </div>
      </div>
        <button
          onClick={() => dispatch(deleteProduct(data._id))}
          className=" btn btn-sm btn-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListItems;
