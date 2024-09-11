import { useMutation } from "@tanstack/react-query";
import { createNewProject } from "../../services/apiProject";
import toast from "react-hot-toast";

export function useCreateProject() {
  const {
    mutate: createProject,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: (newProject) => createNewProject(newProject),
    onSuccess: () => {
      toast.success("Project created successfully");
    },
    onError: (error) => {
      toast.error("Failed to create project");
      console.log(error);
    },
  });
  return { createProject, isCreating, error };
}
