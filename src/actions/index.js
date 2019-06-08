import * as types from './action_types';

export function fetchCars(garage = "enzos") {
  return (
    fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return {type: types.FETCH_CARS, payload: data};
      })
  )
}

export function fetchCar(id){
  return (
    fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return {type: types.FETCH_CAR, payload: data};
      })
  )
}

export function addCar(garage, car) {
  fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    return data;
  })
}
