import { LOGIN_USER, SIGNOUT_USER } from "../action/actionTypes"

const initialState = {
    isAuthenticatation:false,
    user:{},

}

export const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticatation:true,
                user:action.payload
            }
            case SIGNOUT_USER:
                return {
                    ...state,
                    isAuthenticatation: false,
                    user: {}
                }
            default:
                return state;
    }
}