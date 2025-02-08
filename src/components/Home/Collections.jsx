// src/Collections.js
const Collections = () => {
  const collections = [
    {
      title: "Sport Collection",
      imageUrl:
        "https://images.unsplash.com/photo-1598371391798-5a4a7e8b1393?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Gym Collection",
      imageUrl:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Summer Collection",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681701831486-428bc0700cdb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Office Collection",
      imageUrl:
        "https://images.unsplash.com/photo-1623177623442-979c1e42c255?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Shoes Collection",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGx1eGFyeSUyMHByb2R1Y3R8ZW58MHwwfDB8fHww",
    },
    {
      title: "luxary Collection",
      imageUrl:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxsdXhhcnklMjBwcm9kdWN0fGVufDB8MHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="grid  grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto px-4 py-8">
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
            src={collections[1].imageUrl}
            alt={collections[1].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full bg-gray-800 rounded-t-2xl py-4 bottom-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-sm md:text-lg font-semibold">
              {collections[1].title}
            </h3>
            <button className="mt-2 bg-gray-200 text-gray-800 rounded-full px-8 py-2 hover:bg-gray-300 transition ">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[200px] md:h-[300px]">
          <img
            src={collections[2].imageUrl}
            alt={collections[2].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full bg-gray-800 rounded-t-2xl py-4 bottom-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-sm md:text-lg font-semibold">
              {collections[2].title}
            </h3>
            <button className="mt-2 bg-gray-200 text-gray-800 rounded-full px-8 py-2 hover:bg-gray-300 transition ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden shadow-lg h-[417px] md:h-[617px]">
        <img
          src={collections[3].imageUrl}
          alt={collections[3].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full bg-gray-800 rounded-t-2xl py-4 bottom-0 flex flex-col justify-center items-center text-white">
          <h3 className="text-sm md:text-lg font-semibold">
            {collections[3].title}
          </h3>
          <button className="mt-2 bg-gray-200 text-gray-800 rounded-full px-8 py-2 hover:bg-gray-300 transition ">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[200px] md:h-[300px]">
          <img
            src={collections[4].imageUrl}
            alt={collections[4].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full bg-gray-800 rounded-t-2xl py-4 bottom-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-sm md:text-lg font-semibold">
              {collections[4].title}
            </h3>
            <button className="mt-2 bg-gray-200 text-gray-800 rounded-full px-8 py-2 hover:bg-gray-300 transition ">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[200px] md:h-[300px]">
          <img
            src={collections[5].imageUrl}
            alt={collections[5].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full bg-gray-800 rounded-t-2xl py-4 bottom-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-sm md:text-lg font-semibold">
              {collections[5].title}
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
