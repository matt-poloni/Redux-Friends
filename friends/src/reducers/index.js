import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
} from '../actions';

const initialState = {
  error: '',
  friends: [],
  loggingIn: false,
  fetchingFriends: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: false,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
      }
      case FETCH_FRIENDS_START:
      return {
        ...state,
        error: '',
        fetchingFriends: true,
      }
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingFriends: false,
        friends: action.payload,
      }
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingFriends: false,
      }
    default:
      return state;
  }
}
export default reducer;