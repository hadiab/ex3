import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { sessionReducer } from 'redux-react-session'
import { reducer as formReducer } from 'redux-form'
import { HotelReducer } from './hotel_reducer'

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  session: sessionReducer,
  hotels: HotelReducer,
})
