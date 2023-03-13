import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import deleteProduct from "../redux/thunk/DeleteContent";
import EditModall from "./Modal/EditModall";

const ListItems = ({ data, index }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-8 h-8" src={data.Image} alt="img" />
      </td>
      <td>{data.title}</td>
      <td>{data.description.slice(0, 20)}</td>
      <td className="flex gap-2">

        <EditModall data={data}/>
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
