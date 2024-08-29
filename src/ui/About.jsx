function About() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-500">About CoLearn</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Connecting students for collaborative learning and project
            development.
          </p>
        </div>

        {/* About Content */}
        <div className="space-y-12">
          {/* Mission Section */}
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600">
                At CoLearn, our mission is to empower students to learn
                together, build projects, and foster collaboration. We believe
                that learning is more engaging and effective when done as a
                team. Our platform enables students to connect based on their
                skills and interests, and embark on personalized learning
                journeys guided by AI assistance.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                className="rounded-lg shadow-md"
                src="https://via.placeholder.com/500x300"
                alt="Collaboration"
              />
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col-reverse lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2">
              <img
                className="rounded-lg shadow-md"
                src="https://via.placeholder.com/500x300"
                alt="Learning"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-600">
                We envision a future where students from around the world can
                easily find collaborators, work on meaningful projects, and
                enhance their skills through teamwork. CoLearn will be the go-to
                platform for learners to connect, learn, and create together.
                Whether it&apos;s polishing a newly acquired skill or working on
                a project, CoLearn is here to help you on your journey.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Core Values
            </h2>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li>
                🌟 <strong>Collaboration:</strong> We believe teamwork is key to
                successful learning and project development.
              </li>
              <li>
                🌱 <strong>Growth:</strong> We provide tools and resources that
                help students grow their skills and knowledge.
              </li>
              <li>
                🤝 <strong>Community:</strong> We strive to create a strong,
                supportive community of learners and builders.
              </li>
              <li>
                💡 <strong>Innovation:</strong> We foster an environment where
                creativity and new ideas can thrive.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
