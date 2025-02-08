import { useState } from "react";
import CategoryBanner from "../components/Category/CategoryBanner";
import CategoryProduct from "../components/Category/CategoryProduct";
import { products } from "../components/Home/ItemCategory";
import { useParams } from "react-router-dom";

function Category() {
  const { id } = useParams();
  const [type, setType] = useState(["all"]);
  const filteredProducts = products.filter((product) => product.id == id);
  console.log(filteredProducts[0].category);

  return (
    <div>
      {filteredProducts && (
        <div>
          <CategoryBanner
            banner={filteredProducts[0]?.banner}
            type={filteredProducts[0]?.subcategory}
            setypeChange={setType}
            category={filteredProducts[0].category}
          />
          <CategoryProduct items={filteredProducts[0]?.items} type={type} />
        </div>
      )}
    </div>
  );
}

export default Category;
