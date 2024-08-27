import { useQuery } from "@tanstack/react-query";
import { getAllRooms } from "../services/apiRoom";
import Loader from "../ui/Loader";
import Room from "../features/rooms/Room";

function Rooms() {
  const {
    data: rooms,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getAllRooms,
  });

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500">Error loading rooms</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Rooms</h1>
      <ul className="space-y-4">
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </ul>
    </div>
  );
}

export default Rooms;
