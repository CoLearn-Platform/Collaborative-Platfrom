import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { createNewRoom } from "../../services/apiRoom";
import toast from "react-hot-toast";

function CreateRoomForm({ setShowForm }) {
  const { register, handleSubmit } = useForm();
  const userId = 1;

  const { mutate: createRoom, isLoading: isCreating } = useMutation({
    mutationFn: (newRoom) => createNewRoom(newRoom),
    onSuccess: () => {
      toast.success("Room created successfully");
    },
    onError: () => {
      toast.error("Failed to create room");
    },
  });

  function onSubmit(data) {
    createRoom(data);
    // console.log(data);
  }
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-md shadow-md w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Create New Room
          </h2>

          <input value={userId} {...register("createdBy")} hidden />

          {/* Project Title */}
          <div className="mb-4">
            <label className="block text-gray-700">Project Title</label>
            <input
              type="text"
              name="title"
              {...register("title", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter project title"
              required
            />
          </div>

          {/* Project Description */}
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              {...register("description", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter project description"
              rows="3"
              required
            />
          </div>
          {/* Project Visibility */}
          <div className="mb-4">
            <label className="block text-gray-700">Visibility</label>
            <input
              type="checkbox"
              name="visibility"
              defaultValue={false}
              {...register("visibility")}
              className="mr-2"
            />
            <span>Visible</span>
          </div>
          {/* Project Place */}
          <div className="mb-4">
            <label className="block text-gray-700">Place</label>
            <input
              type="text"
              name="place"
              {...register("place", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter project location"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Create Room
          </button>
        </form>
      </div>
      <Button onClick={() => setShowForm("dashboard")}>Back</Button>
    </div>
  );
}

export default CreateRoomForm;
