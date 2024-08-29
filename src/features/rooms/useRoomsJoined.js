import { useQuery } from "@tanstack/react-query";

import { getRoomJoined } from "../../services/apiRoom";

export function useRoomsJoined(userId) {
  const {
    data: roomsJoined,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["roomsJoined"],
    queryFn: () => getRoomJoined(userId),
  });

  return { roomsJoined, isLoading, error };
}
