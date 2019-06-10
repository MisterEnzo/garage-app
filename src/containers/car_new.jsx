import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { addCar } from '../actions/index';

class CarNew extends Component {
  render () {
    return(
      <div>
        <h1>Register a Car</h1>
        <form>
          <Field
            label="Brand"
            name="brand"
            type="text"
          />
          <Field
            label="Model"
            name="model"
            type="text"
          />
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
//     <label for="model">Plate:</label>
//     <input type="text" name="plate" id="plate"/>
//   </div>
//   <div>
//     <input type="submit" value="Submit" />
//   </div>
// </form>
