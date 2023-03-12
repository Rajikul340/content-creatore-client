import { LOGIN_USER, SET_LOADING, SIGNOUT_USER, SIGNUP_USER } from "../action/actionTypes"

const initialState = {
    isLoading:false,
    isAuthenticated:false,
    user:{},

}

export const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
            case SIGNUP_USER:
                return {
                    ...state,
                    user:action.payload

                }
            case SIGNOUT_USER:
                return {
                    ...state,
                    isAuthenticated: false,
                    user: {}
                }
                case SET_LOADING:
                    return {
                        ...state,
                        isLoading:action.payload
                    }
            default:
                return state;
    }
}