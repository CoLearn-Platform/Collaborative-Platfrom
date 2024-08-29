import { useNavigate } from "react-router";

import { useJoinProject } from "./useJoinProject";
import { useLeaveProject } from "./useLeaveProject";
import Button from "../../ui/Button";

function Project({ project, pageType }) {
  const userId = 1;
  const navigate = useNavigate();
  const {
    id,
    title,
    description,
    created_at,
    place,
    repository,
    status,
    visibility,
  } = project;

  const { mutateJoinProject, isJoining } = useJoinProject(id, userId);

  const { mutateLeave, isLeaving } = useLeaveProject(id, userId);

  function handleJoinProject() {
    mutateJoinProject({ id, userId });
    // console.log(id, userId);
  }

  function handleLeaveProject() {
    // console.log("leave project");
    mutateLeave({ id, userId });
  }

  function handleDetails() {
    navigate(`/projects/${id}`);
  }

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
              <div>
                {(pageType === "projects" || pageType === "rooms") && (
                  <>
                    <Button onClick={handleDetails}>details</Button>
                    <Button onClick={handleJoinProject}>join</Button>
                  </>
                )}
                {pageType === "dashboard" && (
                  <>
                    <Button onClick={handleDetails}>details</Button>
                    <Button onClick={handleLeaveProject}>Leave</Button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
