// import React from "react";
import item2 from "./../../assets/home/items/item2.png";
import item3 from "./../../assets/home/items/item3.png";
import item4 from "./../../assets/home/items/item4.png";
import item5 from "./../../assets/home/items/electric1.png";
import item6 from "./../../assets/home/items/electric2.png";
import item7 from "./../../assets/home/items/electric3.png";
import item8 from "./../../assets/home/items/electric4.png";
import ItemCard from "../itemcard/ItemCard";
import { Link } from "react-router-dom";

export const products = [
  {
    id: 1,
    category: "Clothing",
    banner:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subcategory: [
      {
        name: "Caps",
        image:
          "https://justanothercapstore.com/cdn/shop/products/customize-your-own-dad-hat-593851_1800x1800.png?v=1676622450",
      },
      {
        name: "T-shirts",
        image:
          "https://wahts.com/cdn/shop/files/DEAN_PUREBLACK_F_1000x.png?v=1712336294",
      },
      {
        name: "Jeans",
        image:
          "https://cestnormal.co/cdn/shop/files/DarkBlue-front.jpg?v=1736942723&width=3000",
      },
      {
        name: "Hoodies",
        image:
          "https://cestnormal.co/cdn/shop/files/THE_KANGAROO_HOODIE_PINE2859.jpg?v=1736942749&width=3000",
      },
    ],
    items: [
      {
        name: "Levi",
        imageUrl:
          "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8MXwwfHx8MA%3D%3D",
        type: "T-shirts",
        desc: "Athletic Works Men's Core Active Short Sleeve",
        price: "25,000",
      },
      {
        name: "Victor",
        imageUrl:
          "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "T-shirts",
        desc: "Athletic Works Men's Core Active Short Sleeve",
        price: "25,000",
      },
      {
        name: "Keki",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fwc3xlbnwwfDF8MHx8fDA%3D",
        type: "Caps",
        desc: "Athletic Works Men's Core Active Short Sleeve",
        price: "7,000",
      },
      {
        name: "Levi",
        imageUrl:
          "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGplYW5zfGVufDB8MXwwfHx8MA%3D%3D",
        type: "Jeans",
        desc: "Athletic Works Men's Core Active Short Sleeve",
        price: "35,000",
      },
      {
        name: "Sick",
        imageUrl:
          "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9vZGllfGVufDB8MXwwfHx8MA%3D%3D",
        type: "Hoodie",
        desc: "Athletic Works Men's Core Active Short Sleeve",
        price: "85,000",
      },
    ],
  },
  {
    id: 2,
    category: "Electronic",
    banner:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subcategory: [
      {
        name: "Earphones",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKavNfsByMwmvsh1BCEyVAGPUH-E423M-0w&s",
      },
      {
        name: "Computer",
        image:
          "https://www.techtarget.com/rms/onlineimages/acer_chromebook-f_mobile.jpg",
      },
      {
        name: "Accessories",
        image:
          "https://arcticfox.com/cdn/shop/files/Red_Mouse_copy_3.png?v=1720679222&width=1500",
      },
      {
        name: "Phone",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9AFmjRTAjXEvjtEh4d3dIOBhrioIIBa3iw&s",
      },
    ],
    items: [
      {
        name: "Dr. Dre",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWFycGhvbmV8ZW58MHwxfDB8fHww",
        type: "Earphones",
        desc: "Beats by Dr. Dre Solo3 Casual Listening Active Noise Cancella",
        price: "125,000",
      },
      {
        name: "Vic Tsing",
        imageUrl:
          "https://images.unsplash.com/photo-1600510745803-9bb5ed788b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGtleWJvYXJkfGVufDB8MXwwfHx8MA%3D%3D",
        type: "Accessories",
        desc: "Wireless Keyboard and Mouse Combo, 2.4GHz Ergonomic 104 ",
        price: "85,000",
      },
      {
        name: "Logitech",
        imageUrl:
          "https://images.unsplash.com/photo-1662323861979-0538474387e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lyZWxlc3MlMjBtb3VzZXxlbnwwfDF8MHx8fDA%3D",
        type: "Accessories",
        desc: "Logitech Silent Wireless Mouse, 2.4 GHz with USB Receive",
        price: "55,000",
      },
      {
        name: "Macbook Air 2",
        imageUrl:
          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hYyUyMGJvb2t8ZW58MHwxfDB8fHww",
        type: "Computer",
        desc: "Apple MacBook Air 13.3 inch Laptop - Space Gray, M1 Chip, ",
        price: "460,000",
      },
      {
        name: "Iphone 14",
        imageUrl:
          "https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZXxlbnwwfDF8MHx8fDA%3D",
        type: "Phone",
        desc: "Apple iPhone 14 Pro Max (256GB) - Deep Purple",
        price: "2,500,000",
      },
    ],
  },
];

function ItemCategory({ itemNum }) {
  const addItemToLocalStorage = (product) => {
    // Retrieve the existing items from localStorage or initialize an empty array
    const existingItems = JSON.parse(localStorage.getItem("products")) || [];

    // Add the new product to the array
    existingItems.push(product);

    // Store the updated array back in localStorage
    localStorage.setItem("products", JSON.stringify(existingItems));
  };
  return (
    <div className="text-white container mx-auto px-4 pb-8">
      {products.map((product, index) => (
        <div key={index}>
          <div className="flex justify-between items-center my-8">
            <span className="text-2xl font-bold">{product.category}</span>
            <Link
              to={`/category/${product.id}`}
              className="bg-white text-black font-bold px-4 py-2 rounded-full"
            >
              More
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-5">
            {product?.items.map((product, index) => (
              <ItemCard
                key={index}
                {...product}
                addItem={() => {
                  addItemToLocalStorage(product);
                  itemNum();
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCategory;
