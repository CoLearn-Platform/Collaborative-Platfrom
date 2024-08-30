import { useNavigate } from "react-router";

import { useJoinRoom } from "./useJoinRoom";
import { useLeaveRoom } from "./useLeaveRoom";
import { useDeleteRoom } from "./useDeleteRoom";

import Button from "../../ui/Button";
import { FaTrashAlt } from "react-icons/fa";

function Room({ room, pageType, roomOwned = false }) {
  const userId = 1;
  const navigate = useNavigate();
  const { id, title, description, created_at, place, visibility } = room;

  const { mutateJoinRoom, isJoining } = useJoinRoom();

  const { mutateLeaveRoom, isLeaving } = useLeaveRoom();

  const { mutateDelete, isDeleting } = useDeleteRoom();

  function handleJoinRoom() {
    mutateJoinRoom({ id, userId });
    // console.log(id, userId);
  }

  function handleDetails() {
    navigate(`/rooms/${id}`);
  }

  function handleLeaveRoom() {
    mutateLeaveRoom({ id, userId });
    // console.log("leave room");
  }

  function handleDeleteRoom() {
    // console.log("delete room");
    mutateDelete(id);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        {/* Room Title */}
        <h2 className="text-xl font-bold text-blue-500 mb-2">{title}</h2>
        {/* Room Visibility */}
        <div className="flex items-center mb-4">
          <span
            className={`text-sm font-medium ${
              visibility ? "text-green-500" : "text-red-500"
            }`}
          >
            {visibility ? "Public" : "Private"}
          </span>
        </div>
        {/* Room Description */}
        <p className="text-gray-700 mb-4">{description}</p>
        {/* Room Details */}
        <div className="flex flex-col space-y-2">
          <div className="text-gray-600">
            <strong>Created At:</strong>{" "}
            {new Date(created_at).toLocaleDateString()}
          </div>
          <div className="text-gray-600">
            <strong>Location:</strong> {place}
          </div>
          <div className="flex space-x-2 mt-4">
            {(pageType === "projects" || pageType === "rooms") && (
              <>
                <Button onClick={handleDetails}>Details</Button>
                <Button onClick={handleJoinRoom}>Join</Button>
              </>
            )}
            {pageType === "dashboard" && (
              <>
                <Button onClick={handleDetails}>Details</Button>
                <Button onClick={handleLeaveRoom}>Leave</Button>
                {roomOwned && (
                  <Button
                    styleType="remove"
                    onClick={handleDeleteRoom}
                    disabled={isDeleting}
                  >
                    <FaTrashAlt />
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
