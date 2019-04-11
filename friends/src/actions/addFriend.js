import axiosWithAuth from '../utils/axiosAuth';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';
export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  return axiosWithAuth().post('http://localhost:5000/api/friends', friend)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: ADD_FRIEND_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: ADD_FRIEND_FAILURE,
        payload: err.response
      })
    });
}