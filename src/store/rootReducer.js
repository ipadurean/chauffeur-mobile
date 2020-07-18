import { combineReducers } from 'redux';
import authReducer from '../Auth/ducks/reducers';
import homeReducer from '../Home/ducks/reducers';

export default combineReducers({
  auth: authReducer,
  home: homeReducer
})