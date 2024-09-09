import styles from "./Support.module.scss";

export default function Support() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Support Our Mission</h1>
        <p className={styles.description}>
          "Alone, we can do so little; together, we can do so much."
          <br />
          Your support helps us grow, improve, and continue doing what we love.
        </p>

        <div className={styles.optionsWrapper}>
          <div className={styles.optionCard}>
            <h3 className={styles.optionTitle}>Donate</h3>
            <p className={styles.optionText}>
              Help us sustain our project by donating a small amount. Every bit
              counts!
            </p>
            <button className={styles.optionButton}>Donate Now</button>
          </div>

          <div className={styles.optionCard}>
            <h3 className={styles.optionTitle}>Spread the Word</h3>
            <p className={styles.optionText}>
              Share our mission with others who may want to support us.
            </p>
            <button className={styles.optionButton}>Share Now</button>
          </div>

          <div className={styles.optionCard}>
            <h3 className={styles.optionTitle}>Volunteer</h3>
            <p className={styles.optionText}>
              Interested in contributing your time and skills? Join our
              volunteer team!
            </p>
            <button className={styles.optionButton}>Volunteer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
