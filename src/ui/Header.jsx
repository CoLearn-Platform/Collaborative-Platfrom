import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">CoLearn</div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 font-semibold transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-gray-600 hover:text-blue-500 font-semibold transition duration-200"
            >
              Projects
            </Link>
            <Link
              to="/rooms"
              className="text-gray-600 hover:text-blue-500 font-semibold transition duration-200"
            >
              Learning Rooms
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-500 font-semibold transition duration-200"
            >
              About Us
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button>Menu</Button>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button styleType="login">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
