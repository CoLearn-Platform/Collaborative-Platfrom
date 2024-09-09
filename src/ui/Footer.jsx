import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInfo}>
          {/* Footer Info */}
          <h2>CoLearn</h2>
          <p>Empowering collaboration and learning for students everywhere.</p>
          <div>
            <Link to="/joinUs">Join Us</Link>
            <Link to="/support">Support Us</Link>
          </div>
        </div>
        {/* Quick Links */}
        <nav className={styles.links}>
          <Link to="/contact">Contact Us</Link>
          <Link to="/report">Report an Issue</Link>
          <Link to="/feedback">Give suggestions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </nav>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} CoLearn. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
