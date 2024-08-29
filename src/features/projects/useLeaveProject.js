import { useMutation } from "@tanstack/react-query";
import { leaveProject } from "../../services/apiUser";

import toast from "react-hot-toast";

export function useLeaveProject() {
  const {
    mutate: mutateLeave,
    isLoading: isLeaving,
    error,
  } = useMutation({
    mutationFn: ({ id, userId }) => leaveProject(id, userId),
    onSuccess: () => {
      toast.success("Left the project successfully");
    },
    onError: () => {
      toast.error("Failed to leave the project");
    },
  });
  return { mutateLeave, isLeaving, error };
}
