import { useNavigate } from "react-router";
import Button from "../../ui/Button";

function Room({ room }) {
  const navigate = useNavigate();
  const { id, title, description, created_at, place, visibility } = room;

  function handleDetails() {
    navigate(`/rooms/${id}`);
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
            <Button>join</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
