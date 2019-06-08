import initialState from './initial_state';
import * as types from '../actions/action_types';

export default function carReducer(state = initialState.cars, action) {
  switch (action.type){
    case (types.FETCH_CARS):
      return action.payload;
    case (types.FETCH_CAR):
      return [Object.assign({}, action.payload)];
    case (types.ADD_CAR):
      return [
        ...state,
        Object.assign({}, action.payload)
      ];
    default:
      return state;
  }
}
