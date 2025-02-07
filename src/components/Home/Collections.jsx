// src/Collections.js
import collection from "./../../assets/home/collection/collection1.svg";
const Collections = () => {
  const collections = [
    {
      title: "Sport Collection",
      imageUrl: collection,
    },
    {
      title: "Luxury Collection",
      imageUrl: "path_to_your_luxury_image.jpg",
    },
    {
      title: "Summer Collection",
      imageUrl: "path_to_your_summer_image.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 max-w-screen-lg mx-auto px-2 py-8">
      <div className="relative rounded-2xl overflow-hidden shadow-lg h-[417px] md:h-[617px]">
        <img
          src={collections[0].imageUrl}
          alt={collections[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full bg-gray-800 rounded-t-2xl py-4 bottom-0 flex flex-col justify-center items-center text-white">
          <h3 className="text-sm md:text-lg font-semibold">
            {collections[0].title}
          </h3>
          <button className="mt-2 bg-gray-200 text-gray-800 rounded-full px-8 py-2 hover:bg-gray-300 transition ">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[200px] md:h-[300px]">
          <img
            src={collections[0].imageUrl}
            alt={collections[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full bg-gray-800 rounded-t-2xl py-4 bottom-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-sm md:text-lg font-semibold">
              {collections[0].title}
            </h3>
            <button className="mt-2 bg-gray-200 text-gray-800 rounded-full px-8 py-2 hover:bg-gray-300 transition ">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[200px] md:h-[300px]">
          <img
            src={collections[0].imageUrl}
            alt={collections[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full bg-gray-800 rounded-t-2xl py-4 bottom-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-sm md:text-lg font-semibold">
              {collections[0].title}
            </h3>
            <button className="mt-2 bg-gray-200 text-gray-800 rounded-full px-8 py-2 hover:bg-gray-300 transition ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
