import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { addCar } from '../actions/index';

class CarNew extends Component {
  renderInput({ input, label}){
    return(
      <div>
        <label>{label}</label>
        <input {...input}></input>
      </div>
    )
  }

  onSubmit = (values) =>{
    this.props.addCar(values, (post) => {
      this.props.history.push('/');
    })
  }

  render () {
    return(
      <div>
        <h1>Register a Car</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div>
              <label htmlFor="brand">Brand</label>
              <Field name="brand" component={this.renderInput} />
            </div>
            <div>
              <label htmlFor="model">Model</label>
              <Field name="model" component={this.renderInput} />
            </div>
            <div>
              <label htmlFor="plate">Plate</label>
              <Field name="plate" component={this.renderInput} />
            </div>
            <div>
              <label htmlFor="owner">Owner</label>
              <Field name="owner" component={this.renderInput} />
            </div>
            <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default reduxForm({ form: 'newCarForm' })(
  connect(null, { addCar })(CarNew)
);
