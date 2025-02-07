import React from "react";
import CategoryBanner from "../components/Category/CategoryBanner";
import CategoryProduct from "../components/Category/CategoryProduct";
import { products } from "../components/Home/ItemCategory";
import { useParams } from "react-router-dom";

function Category() {
  const { id } = useParams();
  const filteredProducts = products.filter((product) => product.id == id);
  console.log(filteredProducts[0].items);
  return (
    <div>
      <CategoryBanner />
      <CategoryProduct items={filteredProducts[0]?.items} />
    </div>
  );
}

export default Category;
