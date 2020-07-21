import types from './types';

export const setTime = (value) => {
  return {
    type: types.SET_TIME,
    payload: value
  }
}

export const selectDay = (value) => {
  return {
    type: types.SELECT_DAY,
    payload: value
  }
}