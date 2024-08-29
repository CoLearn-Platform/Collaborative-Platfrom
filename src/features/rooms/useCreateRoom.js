import { useMutation } from "@tanstack/react-query";
import { createNewRoom } from "../../services/apiRoom";
import toast from "react-hot-toast";

export function useCreateRoom() {
  const {
    mutate: createRoom,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: (newRoom) => createNewRoom(newRoom),
    onSuccess: () => {
      toast.success("Room created successfully");
    },
    onError: () => {
      toast.error("Failed to create room");
    },
  });
  return { createRoom, isCreating, error };
}
