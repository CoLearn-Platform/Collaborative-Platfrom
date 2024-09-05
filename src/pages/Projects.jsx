import { useState } from "react";

import { useGetAllProjects } from "../features/projects/useGetAllProjects";

import Loader from "../ui/Loader";
import Project from "../features/projects/Project";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("default");
  const [filterLevel, setFilterLevel] = useState("all");

  const { projects, isLoading, error } = useGetAllProjects();

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500">Error loading projects</div>;

  // Search, Filter, and Sort logic
  const filteredProjects = projects
    .filter((project) => {
      // Search by title or place
      const matchesSearch = searchTerm
        ? project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.place.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      // Filter by status (open, closed, or all)
      const matchesStatus =
        filterStatus === "all" || project.status === filterStatus;

      // Filter by type (software, hardware, or default)
      const matchesType =
        filterType === "default" || project.type === filterType;

      // Filter by level (beginner, intermediate, advanced, or all)
      const matchesLevel =
        filterLevel === "all" || project.level === filterLevel;

      return matchesSearch && matchesStatus && matchesType && matchesLevel;
    })
    .sort((a, b) => {
      // Sort by title
      if (sortOrder === "asc") return a.title.localeCompare(b.title);
      if (sortOrder === "desc") return b.title.localeCompare(a.title);
      return 0; // Default order, no sorting
    });

  function resetFilters() {
    setSearchTerm("");
    setSortOrder("default");
    setFilterStatus("all");
    setFilterType("default");
    setFilterLevel("all");
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Projects
      </h1>

      {/* Search, Filter, and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-auto p-3 border border-gray-300 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Filter by Status */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="p-3 w-full sm:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Projects</option>
            <option value="open">Open Projects</option>
            <option value="closed">Closed Projects</option>
          </select>

          {/* Filter by Type */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="p-3 w-full sm:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Type</option>
            <option value="software">Software</option>
            <option value="hardware">Hardware</option>
          </select>
        </div>

        {/* Sort Section */}
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Sort by Title */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-3 w-full sm:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Sort By</option>
            <option value="asc">Title: A-Z</option>
            <option value="desc">Title: Z-A</option>
          </select>

          {/* Sort by Level */}
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="p-3 w-full sm:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Reset Filters Button */}
        <button
          onClick={resetFilters}
          className="p-3 w-full sm:w-auto bg-red-500 text-white rounded-md hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Reset
        </button>
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
}

export default Projects;
