import types from './types';

const initialState = {
  sortType: 'username',
  loading: true,
  drivers: []
}

export default function homeReducer(state = initialState, action) {

  switch (action.type) {
    
  case types.SORT_DRIVERS:
    return { ...state, sortType: action.payload}

  case types.ADD_DRIVERS:
  return { ...state, loading: false, drivers: action.payload };

  default:
    return state;
  }
}