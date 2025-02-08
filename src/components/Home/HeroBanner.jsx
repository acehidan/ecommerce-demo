import { SearchIcon } from "lucide-react";
import backgroud from "./../../assets/home/herobanner.jpg";
import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full h-[50vh] md:h-[100vh] relative">
        <img
          src={backgroud}
          className="w-full h-full object-cover"
          alt="banner"
        />
        <div className="absolute rounded-t-[50px] bottom-0 left-0 w-full h-auto bg-black bg-opacity-50 md:bg-opacity-90">
          <div className="container md:flex justify-center items-center gap-10 mx-auto px-8 py-10 text-white">
            <p className="text-xl md:text-[38px] md:leading-[60px] font-bold mb-4">
              Discover Everything You Need, All in One Place.
            </p>
            <div className="top-0 left-0 bg-white p-2 rounded-full flex w-full md:w-auto h-[50px] items-center justify-between">
              <input
                type="text"
                className="focus:outline-none text-lg px-3 w-full text-black"
                placeholder="Search"
                onFocus={() => {
                  navigate("/search");
                  console.log("focus");
                }}
              />
              <SearchIcon className="bg-black rounded-full p-2" size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
