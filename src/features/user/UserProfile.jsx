import { useParams } from "react-router";
import { useGetUserDetail } from "./useGetUserDetail";
import { useRoomsJoined } from "../rooms/useRoomsJoined";
import { useRoomsOwned } from "../rooms/useRoomsOwned";
import { useProjectJoined } from "../projects/useProjectsJoined";
import { useProjectOwned } from "../projects/useProjectsOwned";
import { formatDate } from "../../utils/helper";
import Loader from "../../ui/Loader";
import Room from "../rooms/Room";
import Project from "../projects/Project";

function UserProfile() {
  const params = useParams();
  const userId = params?.userId;

  const { user, isLoading } = useGetUserDetail(userId);
  const { avatar, created_at, name, email } = user?.[0] || {};
  const { roomsJoined } = useRoomsJoined(userId);
  const { roomsOwned } = useRoomsOwned(userId);
  const { projectsJoined } = useProjectJoined(userId);
  const { projectsOwned } = useProjectOwned(userId);

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* User Profile Header */}
        <div className="flex items-center space-x-6 mb-8 flex-col sm:flex-row">
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
            <p className="text-gray-600">{email}</p>
            <p className="text-gray-400 text-sm">
              Member since: {formatDate(created_at)}
            </p>
          </div>
        </div>

        {/* User's Rooms and Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rooms Owned */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Rooms Owned
            </h3>
            <ul className="space-y-2">
              {roomsOwned?.length ? (
                roomsOwned.map((room) => <Room key={room.id} room={room} />)
              ) : (
                <p className="text-gray-500">No rooms owned yet.</p>
              )}
            </ul>
          </div>

          {/* Rooms Joined */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Rooms Joined
            </h3>
            <ul className="space-y-2">
              {roomsJoined?.length ? (
                roomsJoined.map((room) => <Room key={room.id} room={room} />)
              ) : (
                <p className="text-gray-500">No rooms joined yet.</p>
              )}
            </ul>
          </div>

          {/* Projects Owned */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Projects Owned
            </h3>
            <ul className="space-y-2">
              {projectsOwned?.length ? (
                projectsOwned.map((project) => (
                  <Project key={project.id} project={project} />
                ))
              ) : (
                <p className="text-gray-500">No projects owned yet.</p>
              )}
            </ul>
          </div>

          {/* Projects Joined */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Projects Joined
            </h3>
            <ul className="space-y-2">
              {projectsJoined?.length ? (
                projectsJoined.map((project) => (
                  <Project key={project.id} project={project} />
                ))
              ) : (
                <p className="text-gray-500">No projects joined yet.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
