import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { useAddIssue } from "../hooks/useAddIssue";

function ReportIssue() {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useSelector((state) => state.user);
  const userId = user?.id;
  const isUserLoggedIn = Boolean(userId);

  const { mutateIssue, isLoading } = useAddIssue();

  function onSubmit(data) {
    // console.log(data);
    mutateIssue(data);
    reset();
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="issueTitle"
              className="block text-gray-700 font-bold mb-2"
            >
              Issue Title
            </label>
            <input
              {...register("userId", { required: true })}
              defaultValue={userId}
              hidden
            />
            <input
              type="text"
              id="issueTitle"
              {...register("title", { required: true })}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter issue title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="issueDescription"
              className="block text-gray-700 font-bold mb-2"
            >
              Issue Description
            </label>
            <textarea
              id="issueDescription"
              {...register("description", { required: true })}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter issue description"
              rows={4}
            ></textarea>
          </div>
          {isUserLoggedIn ? (
            <Button type="submit">Submit</Button>
          ) : (
            <p className="text-red-500">Please login to report an issue</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ReportIssue;
