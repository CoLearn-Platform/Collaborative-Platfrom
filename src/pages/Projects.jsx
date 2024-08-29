import { useState } from "react";

import { useGetAllProjects } from "../features/projects/useGetAllProjects";

import Loader from "../ui/Loader";
import Project from "../features/projects/Project";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [filterStatus, setFilterStatus] = useState("all");
  const { projects, isLoading, error } = useGetAllProjects();

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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Projects
      </h1>

      {/* Search, Filter, and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border border-gray-300 rounded-md flex-grow md:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Filter Dropdown */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Projects</option>
          <option value="open">Open Projects</option>
          <option value="closed">Closed Projects</option>
        </select>

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <Project key={project.id} project={project} pageType="projects" />
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
