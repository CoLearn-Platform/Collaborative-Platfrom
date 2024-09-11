import { useForm } from "react-hook-form";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/apiAuth";
import toast from "react-hot-toast";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // errors ? console.log(errors) : console.log("no errors");
  const { mutate } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
      toast.success("registration successful! Please login");
      reset();
    },
    onError: (error) => {
      console.log(error);
      toast.error("registration failed");
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
        {errors.name?.type === "required" && (
          <p className="text-red-800">Name is required</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            message: "Email is required",
          })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        {errors.email?.type === "required" && (
          <p className="text-red-800">Email is required</p>
        )}
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
          {...register("password", {
            minLength: {
              value: 6, // 6 length Password is required
              message: "6 length Password is required",
            },
          })}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Confirm your password"
        />
        {errors.password?.type === "minLength" && (
          <p className="text-red-800">
            Password must have atleast 6 characters
          </p>
        )}
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
}

export default RegisterForm;
