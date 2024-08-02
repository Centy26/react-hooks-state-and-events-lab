import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  // event handle
  const handleCategoryChange = (event) => {setSelectedCategory(event.target.value)};
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* filter items based on selected category */}
        
        {items.filter((item) => selectedCategory === "All" || item.category === selectedCategory)
          .map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
