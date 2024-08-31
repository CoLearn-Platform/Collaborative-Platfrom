import { useNavigate } from "react-router";

import { useJoinRoom } from "./useJoinRoom";
import { useLeaveRoom } from "./useLeaveRoom";
import { useDeleteRoom } from "./useDeleteRoom";

import Button from "../../ui/Button";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

function Room({ room, pageType, roomOwned = false }) {
  //TODO get userId from auth context
  const { user } = useSelector((state) => state.user);
  // console.log(user.id);
  const userId = user?.id;
  const isUserLoggedIn = Boolean(userId);
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
      <div className="px-2 py-2">
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
          <div className="flex space-x-1 mt-3">
            {(pageType === "projects" || pageType === "rooms") && (
              <>
                <Button onClick={handleDetails}>Details</Button>
                <Button onClick={handleJoinRoom} disabled={!isUserLoggedIn}>
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
                <Button onClick={handleDetails}>Details</Button>
                <Button onClick={handleLeaveRoom} styleType="leave">
                  Leave
                </Button>
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
