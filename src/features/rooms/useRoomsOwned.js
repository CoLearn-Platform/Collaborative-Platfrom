import { useQuery } from "@tanstack/react-query";

import { getRoomOwned } from "../../services/apiRoom";

export function useRoomsOwned(userId) {
  const {
    data: roomsOwned,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["roomsOwned"],
    queryFn: () => getRoomOwned(userId),
  });

  return { roomsOwned, error, isLoading };
}
