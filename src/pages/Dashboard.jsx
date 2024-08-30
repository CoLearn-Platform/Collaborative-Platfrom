import { useState } from "react";

import { useGetUserDetail } from "../features/user/useGetUserDetail";
import { useProjectOwned } from "../features/projects/useProjectsOwned";
import { useProjectJoined } from "../features/projects/useProjectsJoined";
import { useRoomsOwned } from "../features/rooms/useRoomsOwned";
import { useRoomsJoined } from "../features/rooms/useRoomsJoined";

import Project from "../features/projects/Project";
import Room from "../features/rooms/Room";
import CreateProjectForm from "../features/projects/CreateProjectForm";
import CreateRoomForm from "../features/rooms/CreateRoomForm";
import UserCard from "../features/user/UserCard";
import Loader from "../ui/Loader";

function Dashboard() {
  const userId = 1;
  const [showForm, setShowForm] = useState("dashboard");

  // Fetch user details
  const { user, isLoading, error } = useGetUserDetail(userId);

  // Fetching details of projects and rooms owned and joined by the user
  const { projectsOwned } = useProjectOwned(userId);
  const { roomsOwned } = useRoomsOwned(userId);

  // Fetching details of projects and rooms joined by the user
  const { projectsJoined } = useProjectJoined(userId);
  const { roomsJoined } = useRoomsJoined(userId);

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* User Info Card */}
        <UserCard user={user[0]} setShowForm={setShowForm} />

        {/* Add New Project Form */}
        {showForm === "newProjectForm" && (
          <CreateProjectForm setShowForm={setShowForm} />
        )}

        {/* Add New Room Form */}
        {showForm === "newRoomForm" && (
          <CreateRoomForm setShowForm={setShowForm} />
        )}

        {/* User Projects and Rooms */}
        {showForm === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projects Joined */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Projects Joined
                </h2>
                {projectsJoined?.length > 0 ? (
                  projectsJoined.map((project) => (
                    <Project
                      project={project}
                      key={project.id}
                      pageType="dashboard"
                    />
                  ))
                ) : (
                  <p className="text-gray-500">No projects joined</p>
                )}
              </div>
            </div>

            {/* Projects Owned */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Projects Owned
                </h2>
                {projectsOwned?.length > 0 ? (
                  projectsOwned.map((project) => (
                    <Project
                      project={project}
                      key={project.id}
                      pageType="dashboard"
                      projectOwned="true"
                    />
                  ))
                ) : (
                  <p className="text-gray-500">No projects owned</p>
                )}
              </div>
            </div>

            {/* Rooms Joined */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Rooms Joined
                </h2>
                {roomsJoined?.length > 0 ? (
                  roomsJoined.map((room) => (
                    <Room room={room} key={room.id} pageType="dashboard" />
                  ))
                ) : (
                  <p className="text-gray-500">No rooms joined</p>
                )}
              </div>
            </div>

            {/* Rooms Owned */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Rooms Owned
                </h2>
                {roomsOwned?.length > 0 ? (
                  roomsOwned.map((room) => (
                    <Room
                      room={room}
                      key={room.id}
                      pageType="dashboard"
                      roomOwned="true"
                    />
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
