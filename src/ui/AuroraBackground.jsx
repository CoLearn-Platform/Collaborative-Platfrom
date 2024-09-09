import styles from "./AuroraBackground.module.scss";

const AuroraBackground = ({ children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default AuroraBackground;
