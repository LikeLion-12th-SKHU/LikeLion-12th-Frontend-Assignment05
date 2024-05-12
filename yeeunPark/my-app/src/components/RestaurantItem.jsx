//RestaurantItem.jsx

import React from "react";

function RestaurantItem({
  restaurant,
  onClick,
  itemClassName,
  buttonClassName,
  liClassName,
}) {
  return (
    <div className={itemClassName}>
      <li className={liClassName}>{restaurant}</li>
      <button
        className={buttonClassName}
        onClick={onClick}>
        -
      </button>
    </div>
  );
}

export default RestaurantItem;
