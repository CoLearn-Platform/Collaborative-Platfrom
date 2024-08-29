import { useQuery } from "@tanstack/react-query";

import { getAllProjects } from "../../services/apiProject";

export function useGetAllProjects() {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({ queryKey: ["projects"], queryFn: getAllProjects });

  return { projects, isLoading, error };
}
