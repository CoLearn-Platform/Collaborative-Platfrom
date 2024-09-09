import { useGetAllProjects } from "../features/projects/useGetAllProjects";
import { useGetTotalActiveUsers } from "../features/user/useGetTotalActiveUsers";
import styles from "./Stats.module.scss"; // SCSS module import

function Stats() {
  const { projects } = useGetAllProjects();
  const { totalActiveUsers } = useGetTotalActiveUsers();
  const stats = [
    {
      title: "Active Projects",
      value: projects.length + "+",
      description: "Collaboration in active projects from around the world.",
      icon: "📈", // Placeholder icon
    },
    {
      title: "Contributors",
      value: totalActiveUsers + "+",
      description: "Students and professionals contributing actively.",
      icon: "👩‍💻", // Placeholder icon
    },
    // Add more stats as needed
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.header}>
        <h2>Our Impact in Numbers</h2>
        <p>
          Explore the growing impact of student collaborations, learning
          journeys, and project development.
        </p>
      </div>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <span className={styles.icon}>{stat.icon}</span>
            <h3>{stat.value}</h3>
            <p className={styles.title}>{stat.title}</p>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
