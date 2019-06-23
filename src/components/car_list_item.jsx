import React from 'react';

const CarListItem = ({car}) => {
  return(
    <div>
      <p>{car.brand} - {car.model}</p>
    </div>
  )
};

export default CarListItem;
