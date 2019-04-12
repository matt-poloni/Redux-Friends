import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
} from '../actions';

const initialState = {
  error: '',
  friends: [],
  loggingIn: false,
  fetchingFriends: false,
  addingFriend: false,
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
    case ADD_FRIEND_START:
      return {
        ...state,
        error: '',
        addingFriend: true,
      }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        error: '',
        addingFriend: false,
        friends: action.payload,
      }
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingFriend: false,
      }
    default:
      return state;
  }
}
export default reducer;