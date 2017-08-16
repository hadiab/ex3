import * as types from '../actions/constant'

const init_state = { 
  isLoggedIn: false,
  loading: false
}

export const AuthReducer = (state = init_state, action) => {
  switch (action.type) {
    // login
    case types.AUTH_LOGIN_SUBMIT:
      return { ...state, loading: true }
    case types.AUTH_LOGIN_SUCCEES:
      return { ...state, isLoggedIn: true, loading: false }
    case types.AUTH_LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, loading: false }

    // logout
    case types.AUTH_LOGOUT:
      return { ...state, isLoggedIn: false, loading: false }

    // register
    case types.AUTH_REGISTER_SUBMIT:
      return { ...state, loading: true }
    case types.AUTH_REGISTER_SUCCEES:
      return { ...state, loading: false }
    case types.AUTH_REGISTER_FAILURE:
      return { ...state, loading: false }

    default:
      return state
  }
}