import { ADD_CONTENT, ADD_TO_HISTORY, DELETE_CONTENT, GET_CONTENT, GET_CONTENT_FAILURE, GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS, GET_UPDATE_CONTENT, LAST_UPLOAD, REMOVE_FROM_HISTORY } from "../action/actionTypes";

const initialContentState = {
  loading:false,
  contentData: [],
  error: '',
  updateData:[]
};

export const contentReducer = (state = initialContentState, action) => {
  // console.log(action.payload);


  switch (action.type) {
  
   
    case GET_UPDATE_CONTENT: 
    return {
      ...state,
      updateData: action.payload
    }
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
        case ADD_TO_HISTORY:
          return {
            ...state,
            contentData: [...state.contentData, action.payload],
          };
        case REMOVE_FROM_HISTORY:
          return {
            ...state,
            contentData: state.contentData.filter(entry => entry !== action.payload),
          };
       case LAST_UPLOAD :
        const item = action.payload;
        const contentItem = state.contentData.slice().sort((a, b) => {
          if (item === 'asc') {
            return a.date.localeCompare(b.date);
          } else {
            return b.date.localeCompare(a.date);
          }
        })
        return { ...state, contentData: contentItem };     

    default:
      return state;
  }
};


