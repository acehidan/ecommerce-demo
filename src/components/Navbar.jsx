import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, User } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ cartCount, scrollY }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isCategoryPage = location.pathname.includes("category");

  // Determine the animation based on scrollY and if we're on the home page
  const shouldShowNavbar = isHomePage || isCategoryPage ? scrollY > 150 : true;

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: ShoppingBag, label: "Cart", path: "/cart" },
    { icon: User, label: "Profile", path: "/profile" },
    // { icon: MessagesSquare, label: "Messages", path: "/messages" },
  ];

  return (
    <motion.div
      animate={
        shouldShowNavbar
          ? { y: 0, opacity: 1, x: "-50%" }
          : { y: 100, opacity: 0, x: "-50%" }
      }
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      transition={{ duration: 0.5 }}
      className="fixed w-[365px] md:w-80 rounded-full bg-white p-4 md:px-4 md:py-2 bottom-3 left-1/2 z-10 shadow-lg border border-gary-300"
    >
      <ul className="flex items-center justify-between mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <li key={path}>
              <Link
                to={path}
                className={`  
                  relative flex items-center justify-center p-3 transform transition-all duration-200  
                  ${
                    isActive
                      ? "bg-black text-white rounded-full px-6 transition"
                      : "text-gray-600"
                  }  
                `}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="w-6 h-6" />
                {isActive && <span className="ml-2 font-medium">{label}</span>}
                {path === "/cart" && cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    aria-label={`${cartCount} items in cart`}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Navbar;
