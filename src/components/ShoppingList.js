import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange =(event)=>{
    setSelectedCategory(event.target.value);
    //event.target.value is whatever value selected by user
  }

  //filter items to show only ones from selected category THIS IS CONFUSING!
  const itemsToDisplay = items.filter((item)=>{
    if (selectedCategory ==="All") return true;

    return item.category ===selectedCategory;
  });


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
