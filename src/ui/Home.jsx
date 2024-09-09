import styles from "./Home.module.scss";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Stats from "./Stats";
import AuroraBackground from "./AuroraBackground";

function Home() {
  return (
    <div className={styles.home}>
      <AuroraBackground>
        <HeroSection />
      </AuroraBackground>
      <FeatureSection />
      <Stats />
    </div>
  );
}

export default Home;
