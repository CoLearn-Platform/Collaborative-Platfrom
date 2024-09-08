import styles from './HeroSection.module.scss'; // Import SCSS module

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Collaborate. Learn. Grow.
        </h1>
        <p className={styles.subHeadline}>
          Join students from around the world in building innovative projects and accelerating your learning journey.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryButton}>Get Started</button>
          <button className={styles.secondaryButton}>Learn More</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src="your-image-url-here.jpg"
          alt="Hero Illustration"
        />
      </div>
    </section>
  );
}

export default HeroSection;
