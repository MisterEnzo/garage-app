import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addCar } from '../actions/index';

class CarNew extends Component {
  renderError = ({touched, error}) => {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return(
      <div>
        <label>{label}</label>
        <input {...input}></input>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (values) =>{
    this.props.addCar(values, (post) => {
      this.props.history.push('/enzos/cars');
    })
  }

  render () {
    return(
      <div>
        <h1>Register a Car</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
            <div className="field">
              <label htmlFor="brand">Brand</label>
              <Field name="brand" component={this.renderInput} />
            </div>
            <div className="field">
              <label htmlFor="model">Model</label>
              <Field name="model" component={this.renderInput} />
            </div>
            <div className="field">
              <label htmlFor="plate">Plate</label>
              <Field name="plate" component={this.renderInput} />
            </div>
            <div className="field">
              <label htmlFor="owner">Owner</label>
              <Field name="owner" component={this.renderInput} />
            </div>
            <button type="submit" className="ui button">Submit</button>
        </form>
        <Link to='/enzos/cars'>
          <p>Back to Index</p>
        </Link>
      </div>
    )
  }
}

const validate = (formValues) => {
  let errors = {};
  if (!formValues.brand) {
    errors.brand = "You must enter the brand of the car";
  }

  if (!formValues.model) {
    errors.model = "You must enter the model of the car";
  }

  if (!formValues.plate) {
    errors.plate = "You must enter the plate of the car";
  }

  if (!formValues.owner) {
    errors.owner = "You must enter the name of the owner of the car";
  }

  return errors;
}

export default reduxForm({ form: 'newCarForm', validate })(
  connect(null, { addCar })(CarNew)
);
