import { useNavigate } from "react-router";

import { useJoinRoom } from "./useJoinRoom";
import { useLeaveRoom } from "./useLeaveRoom";

import Button from "../../ui/Button";

function Room({ room, pageType }) {
  const userId = 1;
  const navigate = useNavigate();
  const { id, title, description, created_at, place, visibility } = room;

  const { mutateJoinRoom, isJoining } = useJoinRoom(id, userId);

  const { mutateLeaveRoom, isLeaving } = useLeaveRoom(id, userId);

  function handleJoinRoom() {
    mutateLeaveRoom({ id, userId });
    // console.log(id, userId);
  }

  function handleDetails() {
    navigate(`/rooms/${id}`);
  }

  function handleLeaveRoom() {
    mutateLeave({ id, userId });
    // console.log("leave room");
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        {/* Project Title */}
        <h2 className="text-xl font-bold text-blue-500 mb-2">{title}</h2>
        {/* Project Status */}
        <div className="flex items-center mb-4">
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
          <div>
            {(pageType === "projects" || pageType === "rooms") && (
              <>
                <Button onClick={handleDetails}>details</Button>
                <Button onClick={handleJoinRoom}>join</Button>
              </>
            )}
            {pageType === "dashboard" && (
              <>
                <Button onClick={handleDetails}>details</Button>
                <Button onClick={handleLeaveRoom}>Leave</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
