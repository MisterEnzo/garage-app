import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';

import promiseMiddleware from 'redux-promise';
import { logger } from 'redux-logger';

const middlewares = applyMiddleware(promiseMiddleware, logger);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    middlewares
  );
};
