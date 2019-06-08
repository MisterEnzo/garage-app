import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import configureStore from './store/configure_store';

import App from './components/app';
import CarShow from './containers/car_show';
import CarNew from './containers/car_new';

import '../assets/stylesheets/application.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/enzos/cars/new" exact component={CarNew} />
        <Route path="/enzos/cars/:id" component={CarShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
