import { useQuery } from "@tanstack/react-query";

import { getProjectOwned } from "../../services/apiProject";

export function useProjectOwned(userId) {
  const {
    data: projectsOwned,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projectsOwned"],
    queryFn: () => getProjectOwned(userId),
  });
  return { projectsOwned, isLoading, error };
}
