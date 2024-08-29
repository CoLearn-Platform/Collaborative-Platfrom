import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { joinProject } from "../../services/apiUser";

export function useJoinProject() {
  const { mutate: mutateJoinProject, isLoading: isJoining, error } = useMutation({
    mutationFn: ({ id, userId }) => joinProject(id, userId),
    onSuccess: () => {
      toast.success("Joined the project successfully");
    },
    onError: () => {
      toast.error("Failed to join the project");
    },
  });
  return{ mutateJoinProject, isJoining, error };
}
