import { toast } from "react-toastify";
import AlertMessage from "../../Component/Hooks/alertMessage";
import { addContent } from "../action/actionCreators";



const addContentData = (contents) =>{
       const {successMessage} = AlertMessage()
    return async (dispatch, getState)=>{
    const res= await fetch("http://localhost:5000/contents", {
        method:"POST",
        body: JSON.stringify(contents),
        headers: {
            "content-type": "application/json"
        }
    })
   const data = res.json()
       successMessage(
        "content add to the server"
    );
   if(data.acknowledged){
      
        dispatch(
            addContent({
              _id: data.insertedId,
              ...contents,
            })
          );
   }

    }
}
export default addContentData;