import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getRoomDetail, getRoomMembers } from "../../services/apiRoom";
import Loader from "../../ui/Loader";

function RoomDetails() {
  const { roomId } = useParams();

  const {
    data: details,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => getRoomDetail(roomId),
  });

  //   console.log(details)

  const { title, created_at, createdBy, description, place, visibility } =
    details[0];

  const { data: roomMembers } = useQuery({
    queryKey: ["members", roomId],
    queryFn: ({ queryKey }) => getRoomMembers(queryKey[1]),
  });

  // console.log(roomMembers);

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
    </div>
  );
}

export default RoomDetails;
