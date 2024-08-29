import { useMutation } from "@tanstack/react-query";
import { JoinRoom } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useJoinRoom() {
  const {
    mutate: mutateJoinRoom,
    isLoading: isJoining,
    error,
  } = useMutation({
    mutationFn: ({ id, userId }) => JoinRoom(id, userId),
    onSuccess: () => {
      toast.success("Joined the room successfully");
    },
    onError: () => {
      toast.error("Failed to join the room");
    },
  });
  return { mutateJoinRoom, isJoining, error };
}
