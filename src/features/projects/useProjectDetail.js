import { useQuery } from "@tanstack/react-query";
import {
  getProjectDetail,
  getProjectMembers,
  getProjectSkill,
} from "../../services/apiProject";
import { getUserDetail } from "../../services/apiUser";

export function useProjectDetail(projectId) {
  const { data: details, isLoading } = useQuery({
    queryKey: ["projectDetails", projectId],
    queryFn: () => getProjectDetail(projectId),
  });

  const { data: projectMembers } = useQuery({
    queryKey: ["projectMembers", projectId],
    queryFn: () => getProjectMembers(projectId),
    enabled: !!projectId, // Ensure projectId is available before fetching
  });

  const { data: owner } = useQuery({
    queryKey: ["owner", details?.[0]?.created_by],
    queryFn: () => getUserDetail(details?.[0]?.created_by),
    enabled: !!details?.[0]?.created_by, // Only fetch owner after details are loaded
  });

  const { data: skills } = useQuery({
    queryKey: ["skills", projectId],
    queryFn: () => getProjectSkill(projectId),
    enabled: !!projectId, // Ensure projectId is available before fetching
  });

  return { details, projectMembers, owner, skills, isLoading };
}
