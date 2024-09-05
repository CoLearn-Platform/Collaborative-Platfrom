import { useMutation } from "@tanstack/react-query";
import { updateProject } from "../../services/apiProject";
import toast from "react-hot-toast";

export function useEditProject({ onSuccess }) {
  const { mutate: updateDetails } = useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      onSuccess();
      toast.success("Project updated successfully");
    },
    onError: (error) => {
      toast.error("Failed to update project");
      console.error("Failed to update project", error);
    },
  });
  return { updateDetails };
}
