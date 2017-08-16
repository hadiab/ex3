import { fork } from 'redux-saga/effects'
import authSaga from './auth_saga'
import hotelSaga from './hotel_saga'

// main saga generators
export function* sagas() {
  yield [
    fork(authSaga),
    fork(hotelSaga),
  ]
}
