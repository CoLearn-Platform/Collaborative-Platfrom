import { useQuery } from "@tanstack/react-query";

import { getProjectMembers } from "../../services/apiProject";

export function useProjectMembers(projectId) {
  const {
    data: projectMembers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["members", projectId],
    queryFn: ({ queryKey }) => getProjectMembers(queryKey[1]),
  });

  return { projectMembers, isLoading, error };
}
