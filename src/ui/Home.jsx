import { Link } from "react-router-dom";

import Button from "./Button";

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-[80dvh] flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
          Welcome to CoLearn
        </h1>
        <p className="text-lg md:text-xl text-white max-w-xl mx-auto">
          Connect with learners and collaborators, join projects, and embark on
          personalized learning journeys guided by AI.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <Link to="/projects">
            <Button>Browse Projects</Button>
          </Link>
          <Link to="/rooms">
            <Button>Browse Rooms</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
