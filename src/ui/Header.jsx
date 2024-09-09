import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import { IoIosLogOut } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../services/apiAuth";
import toast from "react-hot-toast";
import { removeUser } from "../features/user/userSlice";
import styles from "./Header.module.scss"; // Import the SCSS module

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const isAuthenticated = user?.isAuthenticated;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  const { mutate: mutateLogout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logged out successfully");
      dispatch(removeUser());
    },
    onError: (error) => {
      toast.error("Error in logging out");
    },
  });

  function handleLogout() {
    mutateLogout();
    navigate("/");
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link to="/">CoLearn</Link>
          </div>

          {/* Navigation */}
          <nav className={styles.navDesktop}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <Link to="/projects" className={styles.navLink}>
              Projects
            </Link>
            {/* <Link to="/rooms" className={styles.navLink}>
              Learning Rooms
            </Link> */}
            <Link to="/about" className={styles.navLink}>
              About Us
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className={styles.menuButton}>
            <Button onClick={toggleMenu}>Menu</Button>
          </div>

          {/* Menu Container */}
          <div
            className={`${styles.menuContainer} ${
              isMenuOpen ? styles.menuOpen : styles.menuClosed
            }`}
          >
            <div className={styles.menuContent}>
              <button onClick={toggleMenu} className={styles.closeButton}>
                <span className={styles.closeIcon}>×</span> {/* Close icon */}
              </button>
              <nav className={styles.navMobile}>
                <Link to="/" className={styles.navLink} onClick={toggleMenu}>
                  Home
                </Link>
                <Link
                  to="/projects"
                  className={styles.navLink}
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                {/* <Link
                  to="/rooms"
                  className={styles.navLink}
                  onClick={toggleMenu}
                >
                  Learning Rooms
                </Link> */}
                <Link
                  to="/about"
                  className={styles.navLink}
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      className={styles.navLink}
                      onClick={toggleMenu}
                    >
                      Dashboard
                    </Link>
                    <Button
                      styleType="remove"
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                    >
                      <IoIosLogOut />
                    </Button>
                  </>
                ) : (
                  <Link
                    to="/auth"
                    className={styles.navLink}
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                )}
              </nav>
            </div>
          </div>

          {/* Action Button */}
          <div className={styles.actionButtons}>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
                <Button
                  styleType="remove"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                >
                  <IoIosLogOut />
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button styleType="login">Login</Button>
                </Link>
                <Link to="/auth">
                  <Button styleType="primary">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
