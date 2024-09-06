import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useEditProject } from "./useEditProject";

function EditProjectForm({ project, onCloseModal }) {
  const { register, handleSubmit, reset } = useForm({ defaultValues: project });

  const { updateDetails } = useEditProject({ onSuccess: onCloseModal });

  function onSubmit(data) {
    updateDetails(data, {
      onSuccess: () => {
        reset();
        onCloseModal();
      },
    });
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Edit Project</h2>
        {/* Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            {...register("title", { required: true })}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Project title"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            {...register("description", { required: true })}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Project description"
          />
        </div>

        {/* Status and Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="status" className="font-medium">
              Status
            </label>
            <select
              id="status"
              name="status"
              {...register("status", { required: true })}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="" disabled>
                Select status
              </option>
              <option value="open">open</option>
              <option value="close">close</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="visibility" className="font-medium">
              Visibility
            </label>
            <select
              id="visibility"
              name="visibility"
              {...register("visibility", { required: true })}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="" disabled>
                Select visibility
              </option>
              <option value="true">Public</option>
              <option value="false">Private</option>
            </select>
          </div>
        </div>

        {/* Repository and Place */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="repository" className="font-medium">
              Repository URL
            </label>
            <input
              type="url"
              id="repository"
              name="repository"
              {...register("repository", { required: true })}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://github.com/your-repo"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="place" className="font-medium">
              Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              {...register("place", { required: true })}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Location or organization"
            />
          </div>
        </div>

        {/* Project Summary */}
        <div className="flex flex-col">
          <label htmlFor="projectSummary" className="font-medium">
            Project Summary
          </label>
          <textarea
            id="projectSummary"
            name="projectSummary"
            {...register("projectSummary", { required: true })}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Brief project summary"
          />
        </div>

        {/* Level and Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="level" className="font-medium">
              Level
            </label>
            <select
              id="level"
              name="level"
              {...register("level", { required: true })}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="" disabled>
                Select level
              </option>
              <option value="beginner">beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="type" className="font-medium">
              Type
            </label>
            <select
              id="type"
              name="type"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="software">software</option>
              <option value="hardware">hardware</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button styleType="remove" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button type="submit">Update</Button>
        </div>
      </form>
    </div>
  );
}

export default EditProjectForm;
