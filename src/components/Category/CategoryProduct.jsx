import ItemCard from "../itemcard/ItemCard";
import { motion } from "framer-motion";

function CategoryProduct({ items, type }) {
  // Filter items based on type
  const filteredItems = items.filter((item) =>
    type == "all" ? true : item.type === type
  );

  return (
    <div className="text-white container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredItems.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state when visible
            exit={{ opacity: 0, y: 20 }} // State when exiting
            transition={{ duration: 0.5, ease: "easeInOut" }} // Transition duration
          >
            <ItemCard {...product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProduct;
