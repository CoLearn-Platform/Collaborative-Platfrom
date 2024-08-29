import { useQuery } from "@tanstack/react-query";

import { getAllRooms } from "../../services/apiRoom";

export function useGetAllRooms() {
  const {
    data: rooms,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getAllRooms,
  });

  return { rooms, isLoading, error };
}
