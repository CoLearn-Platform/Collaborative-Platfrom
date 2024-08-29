import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import { useCreateRoom } from "./useCreateRoom";

function CreateRoomForm({ setShowForm }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const userId = 1;

  const { createRoom, isCreating } = useCreateRoom();

  function onSubmit(data) {
    createRoom(data).then(() => {
      reset(); // Reset form after successful submission
      setShowForm("dashboard");
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create New Room</h2>

        <input value={userId} {...register("createdBy")} hidden />

        {/* Room Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Room Title</label>
          <input
            type="text"
            {...register("title", { required: "Room title is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter room title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Room Description */}
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            {...register("description", {
              required: "Room description is required",
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter room description"
            rows="3"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Room Visibility */}
        <div className="mb-4 flex items-center">
          <input type="checkbox" {...register("visibility")} className="mr-2" />
          <span>Visible</span>
        </div>

        {/* Room Place */}
        <div className="mb-4">
          <label className="block text-gray-700">Place</label>
          <input
            type="text"
            {...register("place", { required: "Room location is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter room location"
          />
          {errors.place && (
            <p className="text-red-500 text-sm">{errors.place.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={isCreating}>
          {isCreating ? "Creating..." : "Create Room"}
        </Button>
        <Button onClick={() => setShowForm("dashboard")}>Back</Button>
      </form>
    </div>
  );
}

export default CreateRoomForm;
