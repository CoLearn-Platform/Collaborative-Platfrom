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
    onError: () => {
      toast.error("Failed to create project");
    },
  });
  return { createProject, isCreating, error };
}
