import { useQuery } from "@tanstack/react-query";
import { getTotalActiveUsers } from "../../services/apiUser";

export function useGetTotalActiveUsers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["totalActiveUsers"],
    queryFn: getTotalActiveUsers,
  });
  return { totalActiveUsers: data, isLoading, isError };
}
