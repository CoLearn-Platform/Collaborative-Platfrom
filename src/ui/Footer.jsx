import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Footer Info */}
          <div>
            <h2 className="text-xl font-bold">CoLearn</h2>
            <p className="text-gray-400 mt-2">
              Empowering collaboration and learning for students everywhere.
            </p>
          </div>
          {/* Quick Links */}
          <nav className="space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="mt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} CoLearn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
