function Support() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Support CoLearn
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Your support helps us to build better learning platforms and continue
          to serve the student community. Any amount of donation is highly
          appreciated!
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Support;
