import { useMutation } from "@tanstack/react-query";
import { leaveRoom } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useLeaveRoom() {
  const {
    mutate: mutateLeaveRoom,
    isLoading: isLeaving,
    error,
  } = useMutation({
    mutationFn: ({ id, userId }) => leaveRoom(id, userId),
    onSuccess: () => {
      toast.success("Left the room successfully");
    },
    onError: () => {
      toast.error("Failed to leave the room");
    },
  });
  return { mutateLeaveRoom, isLeaving, error };
}
