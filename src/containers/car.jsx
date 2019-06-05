import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Car extends Component {
  render() {
    return(
      <div>
        <h1>Vroroom Vroom</h1>
      </div>
    )
  }
}

export default Car;
