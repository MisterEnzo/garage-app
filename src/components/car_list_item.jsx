import React from 'react';

const CarListItem = ({car}) => {
  return(
    <div className="item">
      <a className="item">{car.brand} - {car.model}</a>
    </div>
  )
};

export default CarListItem;
