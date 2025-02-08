function CategoryBanner({ banner, type, setypeChange, category }) {
  const handleClick = (value) => {
    setypeChange(value);
  };
  return (
    <div>
      <div className="w-full h-[50vh] md:h-[100vh] relative">
        <img src={banner} className="w-full h-full object-cover" alt="banner" />
        <div className="absolute rounded-t-[50px] bottom-0 left-0 w-full h-auto bg-white">
          <div className="container  mx-auto px-5 py-10">
            <p className="text-3xl font-bold">{category}</p>
            <div className="mt-10">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {type.map((category, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center"
                    onClick={() => handleClick(category.name)}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-[60px] h-[60px] rounded-full object-cover border-2 border-gray-200 shadow-sm p-2"
                    />
                    <h3 className="text-md font-semibold text-center">
                      {category.name}
                    </h3>
                  </button>
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
