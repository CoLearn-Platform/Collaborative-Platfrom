import styles from "./FeatureSection.module.scss"; // SCSS module import

function FeatureSection() {
  // Add more features as needed
  const features = [
    {
      title: "Collaborative Projects",
      description:
        "Join or create projects with students from all over, and work together to achieve your learning goals. Collaborate, share ideas, and build something impactful.",
      link: "#",
      linkText: "Discover Projects",
      icon: "🤝", // placeholder icon for collaboration
    },
    {
      title: "Project Progress Tracking",
      description:
        "Keep track of your project milestones and deliverables with detailed progress tracking tools. Stay organized and meet your deadlines.",
      link: "#",
      linkText: "Track Progress",
      icon: "📈", // placeholder icon for progress
    },
    {
      title: "Skill-Based Matching",
      description:
        "Find the right projects for your skills and interests. Get matched with teams looking for your specific expertise.",
      link: "#",
      linkText: "Find Your Match",
      icon: "🔍", // placeholder icon for searching/matching
    },
    {
      title: "Project Showcases",
      description:
        "Showcase your completed projects to the community, receive feedback, and build your portfolio.",
      link: "#",
      linkText: "Showcase Your Work",
      icon: "🎨", // placeholder icon for showcasing
    },
  ];

  return (
    <section className={styles.featureSection}>
      <div className={styles.header}>
        <h2>Collaborate Seamlessly. Build Together.</h2>
        <p>
          Connect with fellow students, collaborate on projects, track your
          progress, and turn ideas into reality. Leverage the power of teamwork
          to accomplish more together.
        </p>
        <a href="#" className={styles.exploreLink}>
          Discover Projects &rarr;
        </a>
      </div>

      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <span className={styles.icon}>{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href={feature.link} className={styles.learnMore}>
              {feature.linkText} &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
