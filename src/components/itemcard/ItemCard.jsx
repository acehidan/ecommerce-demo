import { HeartIcon } from "lucide-react";
import bag from "./../../assets/home/shoppingbag.svg";

const ItemCard = ({ imageUrl, name, desc, price }) => {
  return (
    <div className="bg-white relative rounded-xl shadow-md overflow-hidden">
      <div className="">
        <img
          src={imageUrl}
          alt={name}
          className="w-full object-cover rounded-md"
        />
        <button className="absolute top-2 right-2 bg-black rounded-full p-2">
          <HeartIcon className="" size={20} />
        </button>
      </div>
      <div className="text-black w-full py-5 px-2">
        <h2 className="text-md text-red-500 font-semibold mt-2">{name}</h2>
        <p className="text-sm">{desc}</p>
        <p className="font-bold text-lg text-center mt-2">{price} MMK</p>
        <button className="w-full border border-black py-2 rounded-full mt-4">
          <img src={bag} alt="bag" className="w-6 h-6 inline-block mr-2" />
          <span className="text-black font-bold">Add</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
