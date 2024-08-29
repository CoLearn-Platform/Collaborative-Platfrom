import { useState } from "react";

import Button from "../ui/Button";
import LoginForm from "../ui/LoginForm";
import RegisterForm from "../ui/RegisterForm";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between Login and Register forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>
        {isLogin ? (
          // Login Form
          <LoginForm />
        ) : (
          // Register Form
          <RegisterForm />
        )}

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button onClick={toggleForm}>
              {isLogin ? "Register" : "Login"}
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
