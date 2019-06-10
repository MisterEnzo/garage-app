import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


import garage from './garage_reducer';
import cars from './car_reducer';

const rootReducer = combineReducers({
  garage: garage,
  cars: cars,
  form: formReducer
});

export default rootReducer;
