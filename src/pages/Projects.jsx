import { useState } from "react";
import { useGetAllProjects } from "../features/projects/useGetAllProjects";
import Loader from "../ui/Loader";
import Project from "../features/projects/Project";
import styles from "./Projects.module.scss"; // Import the SCSS module

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("default");
  const [filterLevel, setFilterLevel] = useState("all");

  const { projects, isLoading, error } = useGetAllProjects();

  if (isLoading) return <Loader />;
  if (error) return <div className={styles.error}>Error loading projects</div>;

  // Search, Filter, and Sort logic
  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch = searchTerm
        ? project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.place.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesStatus =
        filterStatus === "all" || project.status === filterStatus;
      const matchesType =
        filterType === "default" || project.type === filterType;
      const matchesLevel =
        filterLevel === "all" || project.level === filterLevel;

      return matchesSearch && matchesStatus && matchesType && matchesLevel;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.title.localeCompare(b.title);
      if (sortOrder === "desc") return b.title.localeCompare(a.title);
      return 0;
    });

  function resetFilters() {
    setSearchTerm("");
    setSortOrder("default");
    setFilterStatus("all");
    setFilterType("default");
    setFilterLevel("all");
  }

  return (
    <div className={styles.projectsContainer}>
      {/* Search, Filter, and Sort Section */}
      <div className={styles.filtersSection}>
        <input
          type="text"
          placeholder="Search Projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.input}
        />

        {/* Filters Section */}
        <div className={styles.filtersWrapper}>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={styles.select}
          >
            <option value="all">All Projects</option>
            <option value="open">Open Projects</option>
            <option value="closed">Closed Projects</option>
          </select>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className={styles.select}
          >
            <option value="default">Type</option>
            <option value="software">Software</option>
            <option value="hardware">Hardware</option>
          </select>
        </div>

        {/* Sort Section */}
        <div className={styles.sortWrapper}>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={styles.select}
          >
            <option value="all">Sort By</option>
            <option value="asc">Title: A-Z</option>
            <option value="desc">Title: Z-A</option>
          </select>

          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className={styles.select}
          >
            <option value="all">Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Reset Filters Button */}
        <button onClick={resetFilters} className={styles.resetButton}>
          Reset
        </button>
      </div>

      {/* Projects List */}
      <ul className={styles.projectsList}>
        {filteredProjects?.length > 0 ? (
          filteredProjects?.map((project) => (
            <Project key={project.id} project={project} pageType="projects" />
          ))
        ) : (
          <p className={styles.noProjects}>No projects found.</p>
        )}
      </ul>
    </div>
  );
}

export default Projects;
