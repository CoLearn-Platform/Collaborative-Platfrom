import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addIssue } from "../services/apiReportIssue";

export function useAddIssue() {
  const { mutate: mutateIssue, isLoading } = useMutation({
    mutationFn: addIssue,
    onSuccess: () => {
      toast.success("Feedback submitted successfully");
    },
    onError: (error) => {
      toast.error("Failed to submit feedback");
    },
  });
  return { mutateIssue, isLoading };
}
