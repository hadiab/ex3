import { call, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import HotelApi from '../api/hotel_api'
import * as types from '../constant/constants'

function* createHotel(action) {
  try {
    const new_hotel = yield call(HotelApi.createHotel, action.data)
    yield put({ type: types.HOTEL_CREATE_SUCCESS, data: new_hotel.data.hotel })
    yield put(push('/'))
  } catch(e) {
    yield put({ type: types.HOTEL_CREATE_FAILURE, errors: e.message })
  }
}

function* getHotel(action) {
  try {
    const hotels = yield call(HotelApi.getHotel, action.data)
    yield put({ type: types.FETCH_HOTELS_SUCCESS, data: hotels.data })
  } catch(e) {
    yield put({ type: types.FETCH_HOTELS_FAILURE, errors: e.message })
  }
}

function* HotelSaga() {
  yield takeEvery(types.HOTEL_CREATE_REQUESTED, createHotel)
  yield takeEvery(types.FETCH_HOTELS_REQUESTED, getHotel)
}

export default HotelSaga