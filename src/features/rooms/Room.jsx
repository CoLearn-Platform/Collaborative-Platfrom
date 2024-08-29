import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

import { JoinRoom, leaveRoom } from "../../services/apiUser";

import toast from "react-hot-toast";
import Button from "../../ui/Button";

function Room({ room }) {
  const userId = 1;
  const navigate = useNavigate();
  const { id, title, description, created_at, place, visibility } = room;

  const { mutate, isLoading: isJoining } = useMutation({
    mutationFn: ({ id, userId }) => JoinRoom(id, userId),
    onSuccess: () => {
      toast.success("Joined the room successfully");
    },
    onError: () => {
      toast.error("Failed to join the room");
    },
  });

  const { mutate: mutateLeave, isLoading: isLeaving } = useMutation({
    mutationFn: ({ id, userId }) => leaveRoom(id, userId),
    onSuccess: () => {
      toast.success("Left the room successfully");
    },
    onError: () => {
      toast.error("Failed to leave the room");
    },
  });

  function handleJoinRoom() {
    mutate({ id, userId });
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
            <Button onClick={handleDetails}>details</Button>
            <Button onClick={handleJoinRoom}>join</Button>
            <Button onClick={handleLeaveRoom}>leave</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
