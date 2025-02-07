// import React from "react";
import item1 from "./../../assets/home/items/item1.png";
import item2 from "./../../assets/home/items/item2.png";
import item3 from "./../../assets/home/items/item3.png";
import item4 from "./../../assets/home/items/item4.png";
import item5 from "./../../assets/home/items/electric1.png";
import item6 from "./../../assets/home/items/electric2.png";
import item7 from "./../../assets/home/items/electric3.png";
import item8 from "./../../assets/home/items/electric4.png";
import ItemCard from "../itemcard/ItemCard";

export const products = [
  {
    id: 1,
    category: "Clothing",
    items: [
      {
        name: "Levi",
        imageUrl: item1,
        desc: "Athletic Works Men's Core Active Short Sleeve",
        price: "25000",
      },
      {
        name: "Levi",
        imageUrl: item2,
        desc: "Athletic Works Men's Core Active Short Sleeve",
        price: "25000",
      },
      {
        name: "Levi",
        imageUrl: item3,
        desc: "Athletic Works Men's Core Active Short Sleeve",
        price: "25000",
      },
      {
        name: "Levi",
        imageUrl: item4,
        desc: "Athletic Works Men's Core Active Short Sleeve",
        price: "25000",
      },
    ],
  },
  {
    id: 2,
    category: "Electronic",
    items: [
      {
        name: "Dr. Dre",
        imageUrl: item5,
        desc: "Beats by Dr. Dre Solo3 Casual Listening Active Noise Cancella",
        price: "125,000",
      },
      {
        name: "Vic Tsing",
        imageUrl: item6,
        desc: "Wireless Keyboard and Mouse Combo, 2.4GHz Ergonomic 104 ",
        price: "85,000",
      },
      {
        name: "Logitech",
        imageUrl: item7,
        desc: "Logitech Silent Wireless Mouse, 2.4 GHz with USB Receive",
        price: "55,000",
      },
      {
        name: "Apple",
        imageUrl: item8,
        desc: "Apple MacBook Air 13.3 inch Laptop - Space Gray, M1 Chip, ",
        price: "460,000",
      },
    ],
  },
];

function ItemCategory() {
  return (
    <div className="text-white container mx-auto px-4 pb-8">
      {products.map((product, index) => (
        <div key={index}>
          <div className="flex justify-between items-center my-8">
            <span className="text-2xl font-bold">{product.category}</span>
            <button className="bg-white text-black font-bold px-4 py-2 rounded-full">
              More
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product?.items.map((product, index) => (
              <ItemCard key={index} {...product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCategory;
