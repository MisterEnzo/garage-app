import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Car extends Component {
  render() {
    return(
      <div>
        <h1>Car Show</h1>
        <p>Brand: {this.props.car.brand}</p>
        <p>Model: {this.props.car.mode}</p>
        <p>Owner: {this.props.car.owner}</p>
        <p>Plate: {this.props.car.plate}</p>

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

export default connect(mapStateToProps)(Car);
