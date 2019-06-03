import React, { Component } from 'react';
import CarListItem from '../components/car_list_item';

class CarList extends Component {
  render() {
    return(
      <div>
        <h2>Car List</h2>
        <CarListItem />
        <CarListItem />
        <CarListItem />
      </div>
    )
  }
}

export default CarList;
