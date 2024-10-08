import { useNavigate, useParams } from "react-router";

import { useRoomDetail } from "./useRoomDetail";
import { useRoomMembers } from "./useRoomMembers";

import Loader from "../../ui/Loader";
import Button from "../../ui/Button";
import { useJoinRoom } from "./useJoinRoom";
import { formatDate } from "../../utils/helper";
import { useGetUserDetail } from "../user/useGetUserDetail";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RoomDetails() {
  //TODO get userId from auth context
  const { user } = useSelector((state) => state.user);
  // console.log(user.id);
  const userId = user?.id;
  const isUserLoggedIn = Boolean(userId);
  const { roomId } = useParams();
  const navigate = useNavigate();

  //fetching room details
  const { details, error, isLoading } = useRoomDetail(roomId);
  const { mutateJoinRoom, isJoining } = useJoinRoom();

  //   console.log(details)

  const {
    title,
    created_at,
    createdBy,
    description,
    place,
    visibility,
    roomSummary,
    //TODO add skills for room
    skills,
  } = details[0];

  const { user: owner } = useGetUserDetail(createdBy);
  const { name: ownerName, email: ownerEmail, id: ownerId } = owner?.[0] || {};

  //fetching room members
  const { roomMembers } = useRoomMembers(roomId);

  function handleNavigateBack() {
    navigate(-1);
  }

  function handleJoinRoom() {
    mutateJoinRoom({ id: roomId, userId });
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
          <span className="font-semibold">Room Summary:</span> {roomSummary}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          {/* Room Details */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Room Details:</h3>
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
          </div>

          {/* Skills & Guidelines */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Skills Required:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {skills?.length === 0
                  ? "not provide"
                  : skills?.map((skill, index) => {
                      return <li key={index}>{skill.skill}</li>;
                    })}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Guidelines:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Ensure respectful communication and foster an inclusive
                  environment for all members, valuing diverse perspectives.
                </li>
                <li>
                  Engage regularly in discussions, share resources, and
                  contribute to group activities.
                </li>
                <li>
                  Focus discussions on the subject matter of the learning room
                  to maintain productivityF and clarity.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Members */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Members:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {roomMembers?.map((member) => (
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
          <Button onClick={handleJoinRoom} disabled={!isUserLoggedIn}>
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

export default RoomDetails;
