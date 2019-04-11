import axiosWithAuth from '../utils/axiosAuth';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  return axiosWithAuth().get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({
        type: FETCH_FRIENDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCH_FRIENDS_FAILURE,
        payload: err.response
      })
    });
}