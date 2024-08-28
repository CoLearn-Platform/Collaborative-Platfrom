import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

function CreateProjectForm({ setShowForm }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-md shadow-md w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Create New Project
          </h2>

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

          {/* Project Status */}
          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <select
              name="status"
              {...register("status", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="OPEN">OPEN</option>
              <option value="CLOSED">CLOSED</option>
            </select>
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

          {/* Project Repository */}
          <div className="mb-4">
            <label className="block text-gray-700">Repository</label>
            <input
              type="url"
              name="repository"
              {...register("repository", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter repository URL"
            />
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
            Create Project
          </button>
        </form>
      </div>
      <Button onClick={() => setShowForm("dashboard")}>Back</Button>
    </div>
  );
}

export default CreateProjectForm;
