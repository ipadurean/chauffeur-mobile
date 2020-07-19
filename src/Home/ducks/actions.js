import types from './types'

export const sortDrivers = (sortType) => {
  return {
    type: types.SORT_DRIVERS,
    payload: sortType
  }
}

export const loadingDrivers = () => {
  return {
    type: types.LOADING_DRIVERS
  }
}

export const addDrivers = (drivers) => {
  return {
    type: types.ADD_DRIVERS,
    payload: drivers
  }
}