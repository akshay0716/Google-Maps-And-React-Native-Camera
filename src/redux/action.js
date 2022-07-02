export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const GET_POSTS = 'GET_POSTS';
import axios from 'axios';

export const setName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setAge = age => dispatch => {
  dispatch({
    type: SET_USER_AGE,
    payload: age,
  });
};

export const getPosts = () => {
  let response = {};
  return async dispatch => {
    try {
      response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
          'Contnt-Type': 'application.json',
        },
      });

      console.log('data', response);
    } catch (err) {
      console.log('err signup', err);
      throw err;
    }

    return response;
  };
};
