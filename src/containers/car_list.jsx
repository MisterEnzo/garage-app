import React, { Component } from 'react';
import CarListItem from '../components/car_list_item';
import { connect } from 'react-redux';

class CarList extends Component {
  render() {
    return(
      <div>
        <h2>Car List</h2>
        {this.props.cars.map((car) => {
          return(
            <CarListItem car={car} />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    cars: state.cars
  }
}

export default connect(mapStateToProps, null)(CarList);
