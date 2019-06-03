import React, { Component } from 'react';
import Garage from './garage';
import CarList from '../containers/car_list';

class App extends Component {
  render() {
    return(
      <div>
        <h1>Garage App</h1>
        <Garage />
        <CarList />
      </div>
    )
  }
}

export default App;
