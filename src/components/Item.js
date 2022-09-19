import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  const handleCartClick =()=>{
    setIsInCart ((isInCart)=> !isInCart)
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>

      <button 
        onClick ={handleCartClick} 
        className={isInCart ? "remove" : "add"}>
           {isInCart ? "Remove From Cart" : "Add To Cart"}
      </button>

    </li>
  );
}

export default Item;
