import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
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
        <Route path="/enzos/cars" exact component={App} />
        <Redirect from="/" to="/enzos/cars" />
        <Route path="/enzos/cars/new" exact component={CarNew} />
        <Route path="/enzos/cars/:id" component={CarShow} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
