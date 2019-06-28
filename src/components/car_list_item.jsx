import React from 'react';
import PropTypes from 'prop-types';

const CarListItem = ({car}) => {
  return(
    <div>
      <p>{car.brand} - {car.model}</p>
    </div>
  )
};

CarListItem.propTypes = {
  car: PropTypes.object.isRequired
}

export default CarListItem;
