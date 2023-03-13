
import AlertMessage from "../../Component/Hooks/alertMessage";
import { updateData } from "../action/actionCreators";

export const updateDataAsync = (data) => async (dispatch) => {
        
    const {successMessage} =AlertMessage();
    try {
      const response = await fetch(`http://localhost:5000/contents/${data._id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
           'Content-Type': 'application/json'
           }
      });
      const updatedData = await response.json();
      dispatch(updateData(data._id, updatedData));
      successMessage(
        "content updated"
    );
   
    } catch (error) {
      console.error('Error updating data:', error);
  
       
    }
  };