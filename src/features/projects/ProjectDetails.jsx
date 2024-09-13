import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useProjectDetail } from "./useProjectDetail";
import { useJoinProject } from "./useJoinProject";
import { formatDate } from "../../utils/helper";

import Loader from "../../ui/Loader";
import Button from "../../ui/Button";

function ProjectDetails() {
  //TODO get userId from auth context
  const { user } = useSelector((state) => state.user);
  // console.log(user.id);
  const userId = user?.id;
  const isUserLoggedIn = Boolean(userId);
  const { projectId } = useParams();
  const navigate = useNavigate();

  const { details, projectMembers, owner, skills, isLoading } =
    useProjectDetail(projectId);

  const {
    title,
    description,
    projectSummary,
    created_at,
    place,
    visibility,
    repository,
  } = details?.[0] || {};

  const { name: ownerName, email: ownerEmail, id: ownerId } = owner?.[0] || {};

  const { mutateJoinProject, isJoining } = useJoinProject();

  function handleNavigateBack() {
    navigate(-1);
  }

  function handleJoinProject() {
    mutateJoinProject({ id: projectId, userId });
  }

  if (isLoading) return <Loader />;
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>

        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Description:</span> {description}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Project Summary:</span>{" "}
          {projectSummary}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          {/* Project Details */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Project Details:</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Created By: </span>
              <Link to={`/user/${ownerId}`} className="underline">
                {ownerName}
              </Link>
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Created At:</span>{" "}
              {formatDate(created_at)}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Place:</span> {place}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Status:</span> {status}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Visibility:</span>{" "}
              {visibility ? "Public" : "Private"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Repository:</span>{" "}
              <a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {repository}
              </a>
            </p>
          </div>

          {/* Skills & Guidelines */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Skills Required:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {skills?.map((skill, index) => {
                  return <li key={index}>{skill.skill}</li>;
                })}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Guidelines:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Pull requests will only be accepted in the development branch.
                </li>
                <li>Code should be clean and well-documented.</li>
                <li>Code should be tested.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Members */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Members:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {projectMembers?.map((member) => (
              // console.log(member.id)
              <li key={member.id} className="text-gray-700">
                <Link to={`/user/${member?.id}`} className="underline">
                  {member?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-6 flex space-x-4">
          <Button onClick={handleNavigateBack}>Back</Button>
          <Button onClick={handleJoinProject} disabled={!isUserLoggedIn}>
            {!isUserLoggedIn
              ? "Login to Join"
              : isJoining
              ? "Joining..."
              : "Join"}
          </Button>
        </div>
        <footer className="text-center mt-4 text-gray-600">
          <p>
            Contact Owner:{" "}
            <a
              href={`mailto:${ownerEmail}`}
              className="text-blue-600 underline"
            >
              {ownerName}
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default ProjectDetails;
