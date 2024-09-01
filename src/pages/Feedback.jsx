import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { useAddFeedback } from "../hooks/useAddFeedback";

function Feedback() {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useSelector((state) => state.user);
  const userId = user?.id;
  const isUserLoggedIn = Boolean(userId);

  const { mutateFeedback, isLoading } = useAddFeedback();

  function onSubmit(data) {
    mutateFeedback(data);
    reset();
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Suggestion Page</h1>
      <div className="max-w-md bg-white shadow-md rounded-md p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              {...register("userId", { required: true })}
              defaultValue={userId}
              hidden
            />
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter description"
              rows={4}
            ></textarea>
          </div>
          {isUserLoggedIn ? (
            <Button type="submit">Submit</Button>
          ) : (
            <p className="text-red-500">Please login to give suggestions</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Feedback;
