import { useQuery } from "@tanstack/react-query";

import { getRoomDetail } from "../../services/apiRoom";

export function useRoomDetail(roomId) {
  const {
    data: details,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => getRoomDetail(roomId),
  });

  return { details, error, isLoading };
}
