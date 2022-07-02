import {SET_USER_NAME, SET_USER_AGE, GET_POSTS} from './action';

const initialState = {
  name: '',
  age: '',
  posts: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_USER_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
