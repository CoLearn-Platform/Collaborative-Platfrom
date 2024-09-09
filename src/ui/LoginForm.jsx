import { useMutation} from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { signIn } from "../services/apiAuth";
import { setUser } from "../features/user/userSlice";

import toast from "react-hot-toast";
import Button from "./Button";

function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { mutate } = useMutation({
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
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;
