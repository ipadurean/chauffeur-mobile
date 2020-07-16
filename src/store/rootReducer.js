import { combineReducers } from 'redux';
import authReducer from '../Auth/ducks/reducers'

export default combineReducers({
  auth: authReducer,
})