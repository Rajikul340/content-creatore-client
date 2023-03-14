import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { contentReducer } from "./contentReducer";
import { filterReducer } from "./FilterReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    content: contentReducer,
    filter: filterReducer
})