import { useQuery } from "@tanstack/react-query";

import { getProjectJoined } from "../../services/apiProject";

export function useProjectJoined(userId) {
  const {
    data: projectsJoined,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["projectsJoined"],
    queryFn: () => getProjectJoined(userId),
  });
  return { projectsJoined, error, isLoading };
}
