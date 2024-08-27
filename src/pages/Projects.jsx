import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../services/apiProject";

function Projects() {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({ queryKey: ["projects"], queryFn: getAllProjects });
  console.log(projects);
  return (
    <div>
      <h1>prjj</h1>
    </div>
  );
}

export default Projects;
