import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getUserDetail } from "../services/apiUser";
import { getProjectJoined, getProjectOwned } from "../services/apiProject";
import { getRoomJoined, getRoomOwned } from "../services/apiRoom";

import Loader from "../ui/Loader";

import Project from "../features/projects/Project";
import Room from "../features/rooms/Room";
import CreateProjectForm from "../features/projects/CreateProjectForm";
import CreateRoomForm from "../features/rooms/CreateRoomForm";
import UserCard from "../features/user/UserCard";

function Dashboard() {
  const userId = 1;
  const [showForm, setShowForm] = useState("dashboard");
  // Fetch user details
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserDetail(userId),
  });

  // Fetching details of projects and rooms owned and joined by the user
  const { data: projectsOwned } = useQuery({
    queryKey: ["projectsOwned"],
    queryFn: () => getProjectOwned(userId),
  });

  // console.log(projectsOwned);

  const { data: roomsOwned } = useQuery({
    queryKey: ["roomsOwned"],
    queryFn: () => getRoomOwned(userId),
  });

  // Fetching details of projects and rooms joined by the user

  const { data: projectsJoined } = useQuery({
    queryKey: ["projectsJoined"],
    queryFn: () => getProjectJoined(userId),
  });

  // console.log(projectsJoined);

  const { data: roomsJoined } = useQuery({
    queryKey: ["roomsJoined"],
    queryFn: () => getRoomJoined(userId),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* User Info Card */}
        <UserCard user={user[0]} setShowForm={setShowForm} />

        {/* add new project form */}
        {showForm === "newProjectForm" && (
          <CreateProjectForm setShowForm={setShowForm} />
        )}

        {/* add new room form */}
        {showForm === "newRoomForm" && (
          <CreateRoomForm setShowForm={setShowForm} />
        )}

        {/* User Projects and Rooms */}
        {showForm === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Projects Joined
                </h2>
                {projectsJoined?.length > 0 ? (
                  projectsJoined.map((project, index) => (
                    <Project project={project} key={index} />
                  ))
                ) : (
                  <p className="text-gray-500">No projects joined</p>
                )}
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Projects Owned
                </h2>
                {projectsOwned?.length > 0 ? (
                  projectsOwned.map((project, index) => (
                    <Project project={project} key={index} />
                  ))
                ) : (
                  <p className="text-gray-500">No projects owned</p>
                )}
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Rooms Joined
                </h2>
                {roomsJoined?.length > 0 ? (
                  roomsJoined.map((room, index) => (
                    <Room room={room} key={index} />
                  ))
                ) : (
                  <p className="text-gray-500">No rooms joined</p>
                )}
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Rooms Owned
                </h2>
                {roomsOwned?.length > 0 ? (
                  roomsOwned.map((room, index) => (
                    <Room room={room} key={index} />
                  ))
                ) : (
                  <p className="text-gray-500">No rooms owned</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
