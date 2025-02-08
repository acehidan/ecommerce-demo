import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";

// Placeholder components for each route
const Messages = () => <div>Messages Page</div>;

const App = () => {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);

  const productsFromStorage =
    JSON.parse(localStorage.getItem("products")) || [];
  const [cartCount, setCartCount] = useState(productsFromStorage.length);

  const addCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeCartCount = () => {
    setCartCount((prevCount) => prevCount - 1);
  };

  const showNavbar = location.pathname !== "/search";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="pb-20 bg-black min-h-screen">
        {/* Add padding to bottom to account for fixed nav */}
        <Routes>
          <Route path="/" element={<Home itemNum={addCartCount} />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<Cart remove={removeCartCount} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
      {showNavbar && <Navbar cartCount={cartCount} scrollY={scrollY} />}
    </>
  );
};

export default App;
