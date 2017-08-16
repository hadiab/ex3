import { call, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import AuthApi from '../api/auth_api'
import * as types from '../constant/constants'
import { sessionService } from 'redux-react-session'
import { startSubmit, stopSubmit } from 'redux-form'

function* login(action) {
  yield put(startSubmit('login'))
  let errors = {}
  try {
    const token = yield call(AuthApi.login, action.data)
    sessionService.saveSession({ token }).then(() => {
      sessionService.saveUser(action.data)
    })
    yield put({ type: types.AUTH_LOGIN_SUCCESS, token })
    yield put(push('/'))
  } catch(err) {
    errors = err.errors
    yield put({ type: types.AUTH_LOGIN_FAILURE, payload: err.errors })
  }
  yield put(stopSubmit('login', errors))
}

function* register(action) {
  try {
    yield call(AuthApi.register, action.data)
    yield put({ type: types.AUTH_REGISTER_SUCCESS })
    yield put(push('/login'))
  } catch(err) {
    yield put({ type: types.AUTH_REGISTER_FAILURE, payload: err.message })
  }
}

function* authSaga() {
  yield takeEvery(types.AUTH_LOGIN_SUBMIT, login)
  yield takeEvery(types.AUTH_REGISTER_SUBMIT, register)
}

export default authSaga

