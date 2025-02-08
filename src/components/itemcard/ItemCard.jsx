import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import bag from "./../../assets/home/shoppingbag.svg";
import { useState } from "react";

const ItemCard = ({ imageUrl, name, desc, price, addItem, text }) => {
  const [fav, setFav] = useState(false);
  return (
    <div className="bg-white relative rounded-xl shadow-md overflow-hidden">
      <div className="">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 md:h-64 object-cover rounded-t-md"
        />
        <button className="absolute top-2 right-2 bg-black rounded-full p-2 ">
          {fav ? (
            <IoHeartSharp
              className="text-white active:scale-105 transition-transform"
              size={20}
              onClick={() => setFav(false)}
            />
          ) : (
            <IoHeartOutline
              className="text-white active:scale-105 transition-transform"
              size={20}
              onClick={() => setFav(true)}
            />
          )}
        </button>
      </div>
      <div className="text-black w-full py-5 px-2">
        <h2 className="text-md text-red-500 font-semibold mb-2">{name}</h2>
        <p className="text-sm">{desc}</p>
        <p className="font-bold text-lg text-center mt-2">{price} MMK</p>
        <button
          className="w-full border border-black py-2 rounded-full mt-4 active:scale-95 transition-transform"
          onClick={() => addItem()}
        >
          <img src={bag} alt="bag" className="w-6 h-6 inline-block mr-2" />
          <span className="font-bold">{text ? text : "Add"}</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
