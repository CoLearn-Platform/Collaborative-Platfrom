import { useQuery } from "@tanstack/react-query";
import { getRoomMembers } from "../../services/apiRoom";

export function useRoomMembers(roomId) {
  const {
    data: roomMembers,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["members", roomId],
    queryFn: ({ queryKey }) => getRoomMembers(queryKey[1]),
  });

  return { roomMembers, error, isLoading };
}
