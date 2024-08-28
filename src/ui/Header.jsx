import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">CoLearn</div>
          {/* Navigation */}
          <nav className="flex space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-gray-600 hover:text-blue-500 font-semibold"
            >
              Projects
            </Link>
            <Link
              to="/rooms"
              className="text-gray-600 hover:text-blue-500 font-semibold"
            >
              Learning Rooms
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-500 font-semibold"
            >
              About Us
            </Link>
          </nav>
          {/* Action Button */}
          <div>
            {isAuthenticated ? (
              <Link to="/dashboard">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link to="/auth">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
