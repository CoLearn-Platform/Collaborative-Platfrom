import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { signIn } from "../services/apiAuth";
import { setUser } from "../features/user/userSlice";

import toast from "react-hot-toast";
import Button from "./Button";

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  // errors ? console.log(errors) : console.log("no errors");

  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      toast.success("Login successful");
      dispatch(setUser(data.user));
      reset();
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Login failed");
    },
  });

  function onSubmit(data) {
    // console.log(data);
    mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        {errors.email?.type === "required" && (
          <p className="text-red-800">Email is required</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          required
          {...register("password", {
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
        {errors.password?.type === "minLength" && (
          <p className="text-red-800">
            Password must have at least 6 characters
          </p>
        )}
      </div>
      <Button type="submit" disabled={isPending}>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
