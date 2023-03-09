import { ADD_CONTENT } from "../action/actionTypes";

const initialContentState = {
  content: [],
  Name: "Rajikul islam",
};

export const contentReducer = (state = initialContentState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
