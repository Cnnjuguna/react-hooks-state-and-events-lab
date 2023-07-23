import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(true);

function handleOnCartClick(){
  setInCart((inCart) => !inCart)
}

const addToCart = (inCart ? "" : "in-cart")


  return (
    <li className={addToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleOnCartClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
