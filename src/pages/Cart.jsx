import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import ItemCard from "../components/itemcard/ItemCard";

function Cart({ remove }) {
  const [savedProducts, setSavedProducts] = useState([]);

  const removeItem = (index) => {
    // Create a copy of the savedProducts array
    const updatedProducts = savedProducts.filter((_, i) => i !== index);

    // Update localStorage with the new array
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Update the state to reflect the removal
    setSavedProducts(updatedProducts);
  };

  useEffect(() => {
    // Retrieve the products from localStorage on component mount
    const productsFromStorage =
      JSON.parse(localStorage.getItem("products")) || [];
    setSavedProducts(productsFromStorage); // Set the state with the products
  }, []);
  return (
    <div className="text-white container mx-auto px-4 py-8">
      <div>
        <div className="flex justify-between items-center mb-8">
          <span className="text-2xl font-bold">Cart</span>
          <button className="bg-white w-48 border border-black py-2 rounded-full mt-4 flex items-center justify-center">
            <span className="text-black font-bold">Check Out</span>
            <ShoppingCart className="w-6 text-black h-6 inline-block ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {savedProducts.length > 0 ? (
            savedProducts.map((product, index) => (
              <ItemCard
                key={index}
                {...product}
                text="Remove"
                addItem={() => {
                  removeItem(index);
                  remove();
                }}
              />
            ))
          ) : (
            <div className="text-center text-gray-500">
              No products in the cart.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
