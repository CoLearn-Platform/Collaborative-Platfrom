import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addFeedback } from "../services/apiFeedback";

export function useAddFeedback() {
  const { mutate: mutateFeedback, isLoading } = useMutation({
    mutationFn: addFeedback,
    onSuccess: () => {
      toast.success("Feedback submitted successfully");
    },
    onError: (error) => {
      toast.error("Failed to submit feedback");
    },
  });
  return { mutateFeedback, isLoading };
}
