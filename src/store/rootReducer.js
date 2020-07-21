import { combineReducers } from 'redux';
import authReducer from '../Auth/ducks/reducers';
import homeReducer from '../Home/ducks/reducers';
import bookingReducer from '../Booking/ducks/reducers';

export default combineReducers({
  auth: authReducer,
  home: homeReducer,
  booking: bookingReducer
})