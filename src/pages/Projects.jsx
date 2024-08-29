import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../services/apiProject";
import { useState } from "react";

import Loader from "../ui/Loader";
import Project from "../features/projects/Project"; // Adjust the path according to your file structure

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [filterStatus, setFilterStatus] = useState("all");
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({ queryKey: ["projects"], queryFn: getAllProjects });

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500">Error loading projects</div>;

  // Search, Filter, and Sort logic
  const filteredProjects = projects
    .filter((project) => {
      return (
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.place.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterStatus === "all" || project.status === filterStatus)
      );
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.title.localeCompare(b.title);
      if (sortOrder === "desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>

      {/* Search, Filter, and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:mr-4 flex-grow"
        />

        {/* Filter Dropdown */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:mr-4"
        >
          <option value="all">All Projects</option>
          <option value="open">Open Projects</option>
          <option value="closed">Closed Projects</option>
        </select>

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="default">Sort By</option>
          <option value="asc">Title: A-Z</option>
          <option value="desc">Title: Z-A</option>
        </select>
      </div>

      {/* Projects List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects?.length > 0 ? (
          filteredProjects?.map((project) => (
            <Project key={project.id} project={project} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No projects found.
          </p>
        )}
      </ul>
    </div>
  );
};

export default Projects;
