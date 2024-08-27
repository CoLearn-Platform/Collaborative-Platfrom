import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../services/apiProject";
import Loader from "../ui/Loader";
import Project from "../features/projects/Project"; // Adjust the path according to your file structure

const Projects = () => {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({ queryKey: ["projects"], queryFn: getAllProjects });

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500">Error loading projects</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
