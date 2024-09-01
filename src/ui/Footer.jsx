import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold">CoLearn</h2>
            <p className="text-gray-400 mt-2">
              Empowering collaboration and learning for students everywhere.
            </p>
          </div>
          {/* Quick Links */}
          <nav className="space-y-4 md:space-y-0 md:space-x-6 text-center flex flex-col">
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white block md:inline-block"
            >
              Contact Us
            </Link>
            <Link
              to="/report"
              className="text-gray-400 hover:text-white block md:inline-block"
            >
              Report an Issue
            </Link>
            <Link
              to="/feedback"
              className="text-gray-400 hover:text-white block md:inline-block"
            >
              Give suggestions
            </Link>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white block md:inline-block"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white block md:inline-block"
            >
              Terms of Service
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
