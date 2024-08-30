import { useForm } from "react-hook-form";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/apiAuth";
import toast from "react-hot-toast";

function RegisterForm() {
  const { register, handleSubmit } = useForm();

  const { mutate } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Registration successful");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Registration failed");
    },
  });

  function onSubmit(data) {
    console.log(data);
    mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Create a password"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Confirm Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Confirm your password"
        />
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
}

export default RegisterForm;
