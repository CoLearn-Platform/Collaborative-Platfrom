import { useNavigate, useParams } from "react-router";

import { useRoomDetail } from "./useRoomDetail";
import { useRoomMembers } from "./useRoomMembers";

import Loader from "../../ui/Loader";
import Button from "../../ui/Button";

function RoomDetails() {
  const { roomId } = useParams();
  const navigate = useNavigate();

  //fetching room details
  const { details, error, isLoading } = useRoomDetail(roomId);

  //   console.log(details)

  const { title, created_at, createdBy, description, place, visibility } =
    details[0];

  //fetching room members
  const { roomMembers } = useRoomMembers(roomId);

  // console.log(roomMembers);

  function handleNavigateBack() {
    navigate(-1);
  }

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
        <span className="font-semibold">Created By:</span> {createdBy}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Place:</span> {place}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Visibility:</span>{" "}
        {visibility ? "Public" : "Private"}
      </p>

      <h3 className="text-xl font-semibold mb-2">Members:</h3>
      <ul className="list-disc list-inside">
        {roomMembers?.map((member, index) => (
          <li key={member.id} className="text-gray-700">
            {member.name}
          </li>
        ))}
      </ul>
      <Button onClick={handleNavigateBack}>Back</Button>
    </div>
  );
}

export default RoomDetails;
