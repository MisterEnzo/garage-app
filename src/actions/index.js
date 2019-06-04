import * as types from './action_types';

export function fetchCars() {
  return (
    fetch('https://wagon-garage-api.herokuapp.com/my-awesome-garage/cars')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return {type: types.FETCH_CARS, payload: data};
      })
  )
}
