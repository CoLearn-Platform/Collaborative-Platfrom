import { useForm } from "react-hook-form";

import { useCreateProject } from "./useCreateProject";

import Button from "../../ui/Button";

function CreateProjectForm({ setShowForm }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //TODO get userId from auth context
  const userId = 1;

  const { createProject, isCreating } = useCreateProject();

  function onSubmit(data) {
    createProject(data).then(() => {
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
        <h2 className="text-2xl font-bold text-center mb-6">
          Create New Project
        </h2>

        <input value={userId} {...register("created_by")} hidden />

        {/* Project Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Project Title</label>
          <input
            type="text"
            {...register("title", { required: "Project title is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter project title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Project Description */}
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            {...register("description", {
              required: "Project description is required",
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter project description"
            rows="3"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Project Status */}
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            {...register("status", { required: "Project status is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="OPEN">OPEN</option>
            <option value="CLOSED">CLOSED</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm">{errors.status.message}</p>
          )}
        </div>

        {/* Project Visibility */}
        <div className="mb-4 flex items-center">
          <input type="checkbox" {...register("visibility")} className="mr-2" />
          <span>Visible</span>
        </div>

        {/* Project Repository */}
        <div className="mb-4">
          <label className="block text-gray-700">Repository</label>
          <input
            type="url"
            {...register("repository", {
              required: "Repository URL is required",
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter repository URL"
          />
          {errors.repository && (
            <p className="text-red-500 text-sm">{errors.repository.message}</p>
          )}
        </div>

        {/* Project Place */}
        <div className="mb-4">
          <label className="block text-gray-700">Place</label>
          <input
            type="text"
            {...register("place", { required: "Project location is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter project location"
          />
          {errors.place && (
            <p className="text-red-500 text-sm">{errors.place.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={isCreating}>
          {isCreating ? "Creating..." : "Create Project"}
        </Button>
        <Button onClick={() => setShowForm("dashboard")}>Back</Button>
      </form>
    </div>
  );
}

export default CreateProjectForm;
