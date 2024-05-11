import React from "react";

function RestaurantItem({ restaurant, onClick }) {
  return (
    <div className='restaurant-item'>
      <li className='restaurant-li'>{restaurant}</li>
      <button
        className='restaurant-remove-button'
        onClick={onClick}>
        -
      </button>
    </div>
  );
}

export default RestaurantItem;
