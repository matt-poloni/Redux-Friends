import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
  error: '',
  friends: [],
  loggingIn: false,
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
    default:
      return state;
  }
}
export default reducer;