import React from "react";
import UpdatePage from "../../dashboard/UpdatePage";

const EditModall = ({data}) => {


  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-3" className="btn btn-sm btn-outline">
       Edit
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
           <UpdatePage data={data}/>
        </div>
      </div>
    </div>
  );
};

export default EditModall;
