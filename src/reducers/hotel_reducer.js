import * as types from '../constant/constants'

const init_state = {
  error: null,
  loading: false,
  isEditing: false,
  hotels: []
}

export const HotelReducer = (state = init_state, action) => {
  switch (action.type) {
    case types.HOTEL_CREATE_REQUESTED: 
      return {...state, loading: true }
    case types.HOTEL_CREATE_SUCCESS: 
      return {...state, hotels: [ ...state.hotels, action.data], loading: false }
    case types.HOTEL_CREATE_FAILURE: 
      return {...state, error: 'Can\'t create a new hotel.' , loading: false }
    case types.FETCH_HOTELS_REQUESTED:
      return {...state, loading: true } 
    case types.FETCH_HOTELS_SUCCESS:
      return {...state, loading: false, hotels: action.data } 
    case types.FETCH_HOTELS_FAILURE:
      return {...state, loading: false, error: 'Can\'t load hotel, try again later.' } 
    default:
      return state
  }
}