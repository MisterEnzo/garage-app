import { combineReducers } from 'redux';

import garage from './garage_reducer';
import cars from './car_reducer';

const rootReducer = CombineReducers({
  garage,
  cars
});

export default rootReducer;
