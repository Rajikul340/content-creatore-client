import { toast } from "react-toastify";
import AlertMessage from "../../Component/Hooks/alertMessage";
import { addContent } from "../action/actionCreators";



const addContentData = (content) =>{
       const {successMessage} = AlertMessage()
    return async (dispatch, getState)=>{
    const res= await fetch("http://localhost:5000/contents", {
        method:"POST",
        body: JSON.stringify(content),
        headers: {
            "content-type": "application/json"
        }
    })
   const data = res.json();
       console.log(data);
       successMessage(
        "content add to the server"
    );
   if(data.acknowledged){
      
        dispatch(
            addContent({
              _id: data.insertedId,
              ...content,
            })
          );
   }

    }
}
export default addContentData;