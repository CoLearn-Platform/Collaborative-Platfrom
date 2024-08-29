import { useQuery } from "@tanstack/react-query";

import { getProjectDetail } from "../../services/apiProject";

export function useProjectDetail(projectId) {
  const {
    data: details,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjectDetail(projectId),
  });
  return { details, error, isLoading };
}
