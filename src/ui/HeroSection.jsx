import { Link } from "react-router-dom";
import styles from "./HeroSection.module.scss"; // Import SCSS module

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>Collaborate. Learn. Grow.</h1>
        <p className={styles.subHeadline}>
          Together we learn, together we grow. Share your knowledge, embrace new
          perspectives, and speed up your journey to mastery through
          collaboration.
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/projects">
            <button className={styles.primaryButton}>Get Started</button>
          </Link>
          <Link to="/about">
            <button className={styles.secondaryButton}>Learn More</button>
          </Link>
        </div>
      </div>
      {/* <div className={styles.heroImage}>
        <img src="your-image-url-here.jpg" alt="Hero Illustration" />
      </div> */}
    </section>
  );
}

export default HeroSection;
