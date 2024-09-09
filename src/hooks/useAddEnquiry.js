import { useMutation } from "@tanstack/react-query";
import { addNewEnquiry } from "../services/apiEnquiry";
import toast from "react-hot-toast";

export function useAddEnquiry() {
  const { mutate: addEnquiry } = useMutation({
    mutationFn: addNewEnquiry,
    onSuccess: () => {
      toast.success("Enquiry submitted successfully");
    },
    onError: () => {
      toast.error("Failed to submit enquiry");
    },
  });
  return { addEnquiry };
}
