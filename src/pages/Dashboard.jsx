import { useQuery } from "@tanstack/react-query";
import { getUserDetail } from "../services/apiUser";
import Loader from "../ui/Loader";
import { getProjectJoined, getProjectOwned } from "../services/apiProject";
import { getRoomJoined, getRoomOwned } from "../services/apiRoom";
import Project from "../features/projects/Project";
import Room from "../features/rooms/Room";
import Button from "../ui/Button";
import { useState } from "react";
import CreateProjectForm from "../features/projects/CreateProjectForm";
import CreateRoomForm from "../features/rooms/CreateRoomForm";

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

  const { name, email, avatar, created_at: JoinedAt } = user[0];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* User Info Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6 bg-blue-500 text-white text-center">
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
              {avatar ? (
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-full h-full rounded-full"
                />
              ) : (
                <span className="text-gray-500 text-2xl ">No Avatar</span>
              )}
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-gray-600">{email}</p>
              <p className="text-gray-500 text-sm">
                Member since: {new Date(JoinedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div>
            <Button onClick={() => setShowForm("newProjectForm")}>
              Add New Project{" "}
            </Button>
            <Button onClick={() => setShowForm("newRoomForm")}>
              Add New Room{" "}
            </Button>
            <Button>edit profile </Button>
          </div>
        </div>

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
