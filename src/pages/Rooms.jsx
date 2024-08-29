import { useState } from "react";

import { useGetAllRooms } from "../features/rooms/useGetAllRooms";

import Loader from "../ui/Loader";
import Room from "../features/rooms/Room";

function Rooms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [filterStatus, setFilterStatus] = useState("all");

  const { rooms, isLoading, error } = useGetAllRooms();

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500">Error loading rooms</div>;

  const filteredRooms = rooms
    .filter((room) => {
      return (
        (room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          room.place.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterStatus === "all" || room.status === filterStatus)
      );
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.title.localeCompare(b.title);
      if (sortOrder === "desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Rooms
      </h1>

      {/* Search, Filter, and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Rooms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border border-gray-300 rounded-md flex-grow md:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Filter Dropdown */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Rooms</option>
          <option value="open">Open Rooms</option>
          <option value="closed">Closed Rooms</option>
        </select>

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="default">Sort By</option>
          <option value="asc">Title: A-Z</option>
          <option value="desc">Title: Z-A</option>
        </select>
      </div>

      {/* Rooms List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms?.length > 0 ? (
          filteredRooms?.map((room) => (
            <Room key={room.id} room={room} pageType="rooms" />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No rooms found.
          </p>
        )}
      </ul>
    </div>
  );
}

export default Rooms;
