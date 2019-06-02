import { combineReducers } from 'redux';

import garage from './garage_reducer';
import cars from './car_reducer';

const rootReducer = combineReducers({
  garage,
  cars
});

export default rootReducer;
