import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";

// Placeholder components for each route

const Cart = () => <div>Cart Page</div>;
const Profile = () => <div>Profile Page</div>;
const Messages = () => <div>Messages Page</div>;

const App = () => {
  return (
    <Router>
      <div className="pb-20 bg-black min-h-screen">
        {/* Add padding to bottom to account for fixed nav */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
      <Navbar />
    </Router>
  );
};

export default App;
