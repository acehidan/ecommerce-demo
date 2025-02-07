import { SearchIcon } from "lucide-react";
import backgroud from "./../../assets/category/clothBanner.jpeg";
import ItemCategory from "../Home/ItemCategory";

const categories = [
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
  //   { name: "Gym Wear", image: "/path/to/gymwear-image.jpg" },
  //   { name: "Dresses", image: "/path/to/dresses-image.jpg" },
  //   { name: "Baby Wear", image: "/path/to/babywear-image.jpg" },
  //   { name: "Shoes", image: "/path/to/shoes-image.jpg" },
];

function CategoryBanner() {
  return (
    <div>
      <div className="w-full h-[50vh] md:h-[75vh] relative">
        <img
          src={backgroud}
          className="w-full h-full object-cover"
          alt="banner"
        />
        <div className="absolute rounded-t-[50px] bottom-0 left-0 w-full h-auto bg-white">
          <div className="container  mx-auto px-5 py-10">
            <p className="text-3xl font-bold">Category</p>
            <div className="mt-10">
              <div className="grid grid-cols-4">
                {categories.map((category, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-[60px] h-[60px] rounded-full object-cover border-2 border-gray-200 shadow-sm p-2"
                    />
                    <h3 className="text-md font-semibold text-center">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
