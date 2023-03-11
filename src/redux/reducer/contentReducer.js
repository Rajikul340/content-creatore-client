import { ADD_CONTENT } from "../action/actionTypes";

const initialContentState = {
  content: [],
};

export const contentReducer = (state = initialContentState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    default:
      return state;
  }
};
