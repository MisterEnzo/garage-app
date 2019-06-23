import React, { Component } from 'react';
import Garage from './garage';
import CarList from '../containers/car_list';

class App extends Component {
  render() {
    return(
      <div className="ui container">
        <div className="ui header">
          <h1 >Garage App</h1>
        </div>
        <div className="ui container grid">
          <Garage />
          <CarList />
        </div>
      </div>
    )
  }
}

export default App;
