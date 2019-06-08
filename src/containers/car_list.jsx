import React, { Component } from 'react';
import CarListItem from '../components/car_list_item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions/index';

class CarList extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render() {
    return(
      <div>
        <h2>Car List</h2>
        {this.props.cars.map((car) => {
          return(
            <Link to={`/enzos/cars/${car.id}`} key={car.id} >
              <CarListItem car={car} />
            </Link>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { fetchCars: fetchCars},
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
