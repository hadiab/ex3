import * as types from '../constant/constants'

// Login action
export const login = (data) => {
  return {
    type: types.AUTH_LOGIN_SUBMIT,
    data
  }
}

// Register action
export const register = (data) => {
  return {
    type: types.AUTH_REGISTER_SUBMIT,
    data
  }
}

// Logout action
export const logout = () => {
  return { type: types.AUTH_LOGOUT }
}