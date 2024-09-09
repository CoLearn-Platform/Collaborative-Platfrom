import styles from './FeatureSection.module.scss'; // SCSS module import

function FeatureSection() {
  const features = [
    {
      title: "Log Management",
      description: "Centralize, store, and search your logs at lightning speeds. Don't stress about archiving or rehydration.",
      link: "#",
      linkText: "Explore logs",
      icon: "🗂️", // placeholder icon
    },
    {
      title: "Observability Dashboards",
      description: "Summarize metrics from all your sources into beautifully designed dashboards.",
      link: "#",
      linkText: "Learn more",
      icon: "📊", // placeholder icon
    },
    // Add more features as needed
  ];

  return (
    <section className={styles.featureSection}>
      <div className={styles.header}>
        <h2>Log everything. Troubleshoot anything.</h2>
        <p>Visualize your entire stack, aggregate all your logs into structured data, and query everything like a single database with SQL.</p>
        <a href="#" className={styles.exploreLink}>Explore logs &rarr;</a>
      </div>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <span className={styles.icon}>{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href={feature.link} className={styles.learnMore}>{feature.linkText} &rarr;</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
