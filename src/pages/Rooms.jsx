import { useQuery } from "@tanstack/react-query";
import { getAllRooms } from "../services/apiRoom";

function Rooms() {
  const {
    data: rooms,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getAllRooms,
  });

  console.log(rooms);
  return (
    <div>
      <h1>rooms</h1>
    </div>
  );
}

export default Rooms;
