import React from "react";
import ItemCard from "../itemcard/ItemCard";

function CategoryProduct({ items }) {
  console.log(items);
  return (
    <div className="text-white container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((product, index) => (
          <ItemCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProduct;
