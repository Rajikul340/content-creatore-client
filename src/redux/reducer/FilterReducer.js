import { LAST_UPLOAD } from "../action/actionTypes"

const filterState = {
    filter:{
        lastUpload:[],
        firstUpload:[]
    }
}

export const filterReducer = (state=filterState, action)=>{
    switch(action.type){
        case LAST_UPLOAD:
            return {
                ...state,
                filter: {
                  ...state.filter,
                  lastUpload: [...state.filter.lastUpload, action.payload],
                },
            }
            default:
                return state
    }  

}