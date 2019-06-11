import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { addCar } from '../actions/index';

class CarNew extends Component {
  onSubmit = (values) =>{
    this.props.addCar(values, (post) => {
      this.props.history.push('/');
      return post;
    })
  }

  render () {
    return(
      <div>
        <h1>Register a Car</h1>
        <form onSubmit={(values) => this.props.addCar(values, () => console.log(car))}>
            <div>
              <label htmlFor="brand">Brand</label>
              <Field name="brand" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="model">Model</label>
              <Field name="model" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="plate">Plate</label>
              <Field name="plate" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="owner">Owner</label>
              <Field name="owner" component="input" type="text" />
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
// export default CarNew;

// <form >
//   <div>
//     <label for="brand">Brand:</label>
//     <input type="text" name="brand" id="brand" />
//   </div>
//   <div>
//     <label for="model">Model:</label>
//     <input type="text" name="model" id="model"/>
//   </div>
//   <div>
//     <label for="owner">Owner:</label>
//     <input type="text" name="owner" id="owner"/>
//   </div>
//   <div>
//     <label for="plate">Plate:</label>
//     <input type="text" name="plate" id="plate"/>
//   </div>
//   <div>
//     <input type="submit" value="Submit" />
//   </div>
// </form>
