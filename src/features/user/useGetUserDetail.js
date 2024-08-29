import { useQuery } from "@tanstack/react-query";

import { getUserDetail } from "../../services/apiUser";

export function useGetUserDetail(userId) {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserDetail(userId),
  });
  return { user, isLoading, error };
}
