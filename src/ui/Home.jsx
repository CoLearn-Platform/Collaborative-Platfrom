import styles from "./Home.module.scss";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Stats from "./Stats";

function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <FeatureSection />
      <Stats />
    </div>
  );
}

export default Home;
