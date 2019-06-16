import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCar } from '../actions/index';

class CarShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading... </p>;
    }

    return(
      <div>
        <h1>Car Show</h1>
        <p>Brand: {this.props.car.brand}</p>
        <p>Model: {this.props.car.model}</p>
        <p>Owner: {this.props.car.owner}</p>
        <p>Plate: {this.props.car.plate}</p>
        <Link to='/enzos/cars'>
          <p>Back to Index</p>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(car => car.id === idFromUrl);
  console.log(car);
  console.log(state.cars);
  return { car };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { fetchCar: fetchCar},
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
