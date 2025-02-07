import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, User, MessagesSquare } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: ShoppingBag, label: "Cart", path: "/cart", badge: 2 },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: MessagesSquare, label: "Messages", path: "/messages" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 rounded-full m-5 right-0 bg-white p-4">
      <ul className="flex items-center justify-between max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, path, badge }) => {
          const isActive = location.pathname === path;
          return (
            <li key={path}>
              <Link
                to={path}
                className={`
                  relative flex items-center justify-center p-3
                  ${
                    isActive
                      ? "bg-black text-white rounded-full px-6"
                      : "text-gray-600"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="w-6 h-6" />
                {isActive && <span className="ml-2 font-medium">{label}</span>}
                {badge && (
                  <span
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    aria-label={`${badge} items in cart`}
                  >
                    {badge}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
