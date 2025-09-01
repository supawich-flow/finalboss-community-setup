import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../features/auth/schemas/register.schema";
import type { RegisterSchemaType } from "../../features/auth/schemas/register.schema";
import { useForm } from "react-hook-form";
import logo from "../../../public/Finallboss logo_formatted.png";

export default function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaType>({
    resolver: yupResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: RegisterSchemaType) => {
    const toastId = toast.loading("กำลังสมัครสมาชิก...");
    try {
      await axios.post("http://localhost:5000/api/auth/register", data);
      toast.success("สมัครสมาชิกสำเร็จ!", { id: toastId });
      navigate("/login");
    } catch (err) {
      console.log("Register Error:", err);
      toast.error("สมัครสมาชิกล้มเหลว!", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
      <div className="bg-[#1E1E1E] text-white rounded-lg p-10 w-full max-w-md shadow-lg">
        <div className="flex justify-center mb-3">
          <img src={logo} alt="logo" />
        </div>
        <p className="text-center text-sm text-[#AAAAAA] mb-10">
          Create your Finalboss Community account to get started!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              {...register("username")}
              placeholder="finalboss"
              className={`w-full px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 text-sm shadow-lg ${
                errors.username ? "border-red-500" : "border-[#313131]"
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className={`w-full px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 text-sm shadow-lg ${
                errors.password ? "border-red-500" : "border-[#313131]"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Re-enter your password"
              className={`w-full px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 text-sm shadow-lg ${
                errors.confirmPassword ? "border-red-500" : "border-[#313131]"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">E-mail address</label>
            <input
              type="email"
              {...register("email")}
              placeholder="example1234@gmail.com"
              className={`w-full px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 text-sm shadow-lg ${
                errors.email ? "border-red-500" : "border-[#313131]"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#E03E3E] hover:bg-[#A83232] transition-all duration-300 ease-in-out rounded-lg font-bold mt-3 cursor-pointer shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? "กำลังสมัคร..." : "REGISTER"}
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 hover:text-blue-500 transition-all ease-in-out duration-200 cursor-pointer underline"
          >
            Log in
          </span>
        </div>
      </div>
    </div>
  );
}
