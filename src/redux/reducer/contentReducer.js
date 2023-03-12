import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, GET_CONTENT_FAILURE, GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS } from "../action/actionTypes";

const initialContentState = {
  loading:false,
  contentData: [],
  error: ''
  
};

export const contentReducer = (state = initialContentState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };
      case GET_CONTENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_CONTENT_SUCCESS:
      return {
        loading: false,
        contentData: action.payload,
        error: ''
      };
    case GET_CONTENT_FAILURE:
      return {
        loading: false,
        contentData: [],
        error: action.payload
      };
      case DELETE_CONTENT:
        return {
           ...state,
           contentData: state.contentData.filter(p=>p._id !== action.payload)
        }

    default:
      return state;
  }
};


