import { addDrivers } from './actions';

const baseUrl = 'https://radiant-fjord-35660.herokuapp.com';

export const fetchDrivers = (query = {}) => {
  
  
  return function (dispatch) {
    fetch(`${baseUrl}/drivers?filter=${query.keyword}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.error);
        }
      })
        .then(drivers => {
          return dispatch(addDrivers(drivers));
      })
        .catch(error => console.log(error))
  };
}