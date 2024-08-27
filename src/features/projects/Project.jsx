function Project({ project }) {
  const {
    title,
    description,
    created_at,
    place,
    repository,
    status,
    visibility,
  } = project;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        {/* Project Title */}
        <h2 className="text-xl font-bold text-blue-500 mb-2">{title}</h2>
        {/* Project Status */}
        <div className="flex items-center mb-4">
          <span
            className={`text-sm font-medium ${
              status === "open" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </span>
          <span className="ml-2 text-gray-500">
            • {visibility ? "Public" : "Private"}
          </span>
        </div>
        {/* Project Description */}
        <p className="text-gray-700 mb-4">{description}</p>
        {/* Project Details */}
        <div className="flex flex-col space-y-2">
          <div className="text-gray-600">
            <strong>Created At:</strong>{" "}
            {new Date(created_at).toLocaleDateString()}
          </div>
          <div className="text-gray-600">
            <strong>Location:</strong> {place}
          </div>
          {repository && (
            <div className="text-gray-600">
              <strong>Repository:</strong>{" "}
              <a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {repository}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
