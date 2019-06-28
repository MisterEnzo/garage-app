import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      <div className="ui container list">
        <h1 className="item">Car Show</h1>
        <p className="item">Brand: {this.props.car.brand}</p>
        <p className="item">Model: {this.props.car.model}</p>
        <p className="item">Owner: {this.props.car.owner}</p>
        <p className="item">Plate: {this.props.car.plate}</p>
        <Link to='/cars'>
          <p>Back to Index</p>
        </Link>
      </div>
    )
  }
}

CarShow.propTypes = {
  car: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(car => car.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { fetchCar: fetchCar},
    dispatch
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
