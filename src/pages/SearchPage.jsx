import { SearchIcon } from "lucide-react";
import { products } from "../components/Home/ItemCategory";
import { useState } from "react";
import ItemCard from "../components/itemcard/ItemCard";
import { motion } from "framer-motion";

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setSearchResults([]);
      return;
    }
    // Perform search logic here
    const results = products.flatMap((product) =>
      product.items.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setSearchResults(results);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 250 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state when visible
        exit={{ opacity: 0, y: 20 }} // State when exiting
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="bg-white p-2 rounded-full flex w-full md:w-auto h-[50px] items-center justify-between"
      >
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          className="focus:outline-none text-lg px-3 w-full text-black"
          placeholder="Search"
        />
        <SearchIcon
          className="bg-black text-white rounded-full p-2"
          size={40}
        />
      </motion.div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {searchResults.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state when visible
            exit={{ opacity: 0, y: 20 }} // State when exiting
            transition={{ duration: 0.5, ease: "easeInOut" }} // Transition duration
          >
            <ItemCard key={index} {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
