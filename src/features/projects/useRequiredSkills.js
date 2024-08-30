import { useQuery } from "@tanstack/react-query";
import { getProjectSkill } from "../../services/apiProject";

export function useRequiredSkills(projectId) {
  const {
    data: skills,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["skills", projectId],
    queryFn: () => getProjectSkill(projectId),
  });
  return { skills, isLoading, error };
}
