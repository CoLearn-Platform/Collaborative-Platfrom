import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import { getProjectDetail, getProjectMembers } from "../../services/apiProject";

import Loader from "../../ui/Loader";

function ProjectDetails() {
  const { projectId } = useParams();
  // console.log(typeof projectId);

  const {
    data: details,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjectDetail(projectId),
  });

  const {
    description,
    title,
    created_by,
    place,
    repository,
    visibility,
    created_at,
  } = details[0];

  const { data: projectMembers } = useQuery({
    queryKey: ["members", projectId],
    queryFn: ({ queryKey }) => getProjectMembers(queryKey[1]),
  });

  // console.log(projectMembers);
  // console.log(details);

  if (isLoading) return <Loader />;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Description:</span> {description}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Created At:</span> {created_at}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Created By:</span> {created_by}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Place:</span> {place}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Status:</span> {status}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Visibility:</span>{" "}
        {visibility ? "Public" : "Private"}
      </p>
      <p className="text-gray-600 mb-4">
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

      <h3 className="text-xl font-semibold mb-2">Members:</h3>
      <ul className="list-disc list-inside">
        {projectMembers?.map((member, index) => (
          <li key={member.id} className="text-gray-700">
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetails;
