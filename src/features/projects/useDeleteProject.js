import { useMutation } from "@tanstack/react-query";
import { deleteProject } from "../../services/apiProject";
import toast from "react-hot-toast";

export function useDeleteProject() {
  const { mutate: mutateDelete, isLoading: isDeleting } = useMutation({
    mutationFn: (projectId) => deleteProject(projectId),
    onSuccess: () => {
      console.log("project deleted");
      toast.success("Project deleted successfully");
    },
    onError: (error) => {
      console.log("error in deleting project", error);
      toast.error("Error in deleting project");
    },
  });
  return { mutateDelete, isDeleting };
}
