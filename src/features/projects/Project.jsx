import { useNavigate } from "react-router";

import { useJoinProject } from "./useJoinProject";
import { useLeaveProject } from "./useLeaveProject";
import { useDeleteProject } from "./useDeleteProject";

import Button from "../../ui/Button";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import Modal from "../../ui/Modal";
import EditProjectForm from "./EditProjectForm";
import { formatDate } from "../../utils/helper";

function Project({ project, pageType, projectOwned = false }) {
  //TODO get userId from auth context
  const { user } = useSelector((state) => state.user);
  const userId = user?.id;
  const isUserLoggedIn = Boolean(userId);
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
    level,
    type,
  } = project;

  const { mutateJoinProject, isJoining } = useJoinProject();

  const { mutateLeave, isLeaving } = useLeaveProject();

  const { mutateDelete, isDeleting } = useDeleteProject();
  function handleJoinProject() {
    mutateJoinProject({ id, userId });
    // console.log(id, userId);
  }

  function handleLeaveProject() {
    // console.log("leave project");
    mutateLeave({ id, userId });
  }

  function handleDeleteProject() {
    // console.log("delete project");
    mutateDelete(id);
  }

  function handleDetails() {
    navigate(`/projects/${id}`);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-2 py-2">
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
            <strong>Created At:</strong> {formatDate(created_at)}
          </div>
          <div className="text-gray-600">
            <strong>Level:</strong> {level}
          </div>
          <div className="text-gray-600">
            <strong>type:</strong> {type}
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

        {/* Action Buttons */}
        <div className="mt-3 flex space-x-1">
          {pageType === "projects" && (
            <>
              <Button onClick={handleDetails} disabled={isJoining}>
                Details
              </Button>
              <Button onClick={handleJoinProject} disabled={!isUserLoggedIn}>
                {!isUserLoggedIn
                  ? "Login to Join"
                  : isJoining
                  ? "Joining..."
                  : "Join"}
              </Button>
            </>
          )}
          {pageType === "dashboard" && (
            <>
              <Button onClick={handleDetails} disabled={isLeaving}>
                Details
              </Button>
              <Button
                onClick={handleLeaveProject}
                disabled={isLeaving}
                styleType="leave"
              >
                {isLeaving ? "Leaving..." : "Leave"}
              </Button>
              {projectOwned && (
                <>
                  <Button
                    styleType="remove"
                    onClick={handleDeleteProject}
                    disabled={isDeleting}
                  >
                    <FaTrashAlt />
                  </Button>
                  <Modal>
                    <Modal.Open opens="edit-project">
                      <Button>
                        <FaPencilAlt />
                      </Button>
                    </Modal.Open>
                    <Modal.Window name="edit-project">
                      <EditProjectForm project={project} />
                    </Modal.Window>
                  </Modal>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
