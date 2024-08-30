import { useMutation } from "@tanstack/react-query";
import { deleteRoom } from "../../services/apiRoom";
import toast from "react-hot-toast";

export function useDeleteRoom() {
  const { mutate: mutateDelete, isLoading: isDeleting } = useMutation({
    mutationFn: (roomId) => deleteRoom(roomId),
    onSuccess: () => {
      console.log("room deleted");
      toast.success("Room deleted successfully");
    },
    onError: (error) => {
      console.log("error in deleting room", error);
      toast.error("Error in deleting room");
    },
  });
  return { mutateDelete, isDeleting };
}
