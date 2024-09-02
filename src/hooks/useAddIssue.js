import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addIssue } from "../services/apiReportIssue";

export function useAddIssue() {
  const { mutate: mutateIssue, isLoading } = useMutation({
    mutationFn: addIssue,
    onSuccess: () => {
      toast.success("Issue reported successfully");
    },
    onError: (error) => {
      toast.error("Failed to report Issue");
    },
  });
  return { mutateIssue, isLoading };
}
