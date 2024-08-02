import React from "react";
import { useState } from "react";



function Item({ name, category }) {

  // 1. initialize the state variable for the status of the cart
  const  [itemInCart, setItemInCart] = useState(false);
  // classname based on state variable
  const liClassName = itemInCart? "in-cart" : "";

  const handleCartToggle = () => {setItemInCart(!itemInCart)};
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* attach the event handler to the button then condtion handle */}
      <button className="add" onClick = {handleCartToggle}> {itemInCart? "Remove from Cart" : "Add to Cart"} </button>
    </li>
  );
}

export default Item;
