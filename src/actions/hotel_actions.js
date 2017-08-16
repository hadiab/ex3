import * as types from '../constant/constants'

// create hotel action
export const createHotel = (data) => {
  return {
    type: types.HOTEL_CREATE_REQUESTED,
    data
  }
}

export const getHotels = () => ({ type: types.FETCH_HOTELS_REQUESTED })
