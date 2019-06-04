import React from 'react';

const CarListItem = ({car}) => {
  return(
    <div>
      <h3>{car.brand} - {car.brand}</h3>
      <p>{car.owner}</p>
      <p>{car.plate}</p>
    </div>
  )
};

export default CarListItem;
