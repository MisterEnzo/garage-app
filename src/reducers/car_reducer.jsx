import initialState from './initial_state';

export default function carReducer(state = initialState.cars, action) {
  switch (action.type){
    default:
      return state;
  }
}
