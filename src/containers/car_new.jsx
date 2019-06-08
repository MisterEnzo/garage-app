import React, { Component } from 'react';

class CarNew extends Component {
  render () {
    return(
      <div>
        <h1>Register a Car</h1>
        <form>
          <div>
            <label for="brand">Brand:</label>
            <input type="text" name="brand" id="brand" />
          </div>
          <div>
            <label for="model">Model:</label>
            <input type="text" name="model" id="model"/>
          </div>
          <div>
            <label for="model">Owner:</label>
            <input type="text" name="owner" id="owner"/>
          </div>
          <div>
            <label for="model">Plate:</label>
            <input type="text" name="plate" id="plate"/>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default CarNew;
