import Button from "../../ui/Button";

function UserCard({ user, setShowForm }) {
  // destructuring user object
  //   console.log(user)
  const { name, email, avatar, created_at: JoinedAt } = user;
  return (
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
    // <div>hello</div>
  );
}

export default UserCard;
