import types from './types';

const initialState = {
 
  daySelected: false,
  
}

export default function bookingReducer(state = initialState , action) {
  
  switch (action.type) {

    case types.SELECT_DAY:
      return { ...state, time: {start: null, end: null}, daySelected: action.payload }
    
    default:
      return state;
    }
  }