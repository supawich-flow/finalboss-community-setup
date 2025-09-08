import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../features/auth/schemas/login.schema";
import type { LoginSchemaType } from "../../features/auth/schemas/login.schema";
import logo from "../../../public/Finallboss logo_formatted.png";
import { AxiosUtil } from "@/utils/AxiosUtil";

type LoginResponse = {
  token: string;
  userData: any;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: LoginSchemaType) => {
    const toastId = toast.loading("กำลังเข้าสู่ระบบ...");

    const response = await AxiosUtil.createRequest<LoginResponse>({
      method: "POST",
      url: "/api/auth/login",
      data: data,
    });

    if (response.ok) {
      login(response.data.token, response.data.userData);
      toast.success("เข้าสู่ระบบสำเร็จ!", { id: toastId });
    } else {
      console.log("Login Error:", response);
      toast.error(`เข้าสู่ระบบล้มเหลว: ${response.message}`, { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
      <div className="bg-[#1E1E1E] text-white rounded-lg p-10 w-full max-w-md shadow-lg">
        <div className="flex justify-center mb-3">
          <img src={logo}></img>
        </div>
        <p className="text-center text-sm text-[#AAAAAA] mb-10">
          Login to Finalboss Community to continue to the site!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              disabled={isSubmitting}
              placeholder="Your username"
              {...register("username")}
              className="w-full px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 border-[#313131] text-sm shadow-lg"
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
              disabled={isSubmitting}
              placeholder="Your password"
              {...register("password")}
              className="w-full px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 border-[#313131] text-sm shadow-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
            <div className="text-right text-xs mt-1 text-blue-400  hover:text-blue-500 transition-all ease-in-out duration-200 cursor-pointer underline">
              Forgot password?
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#E03E3E] hover:bg-[#A83232] transition-all duration-300 ease-in-out rounded-lg font-bold mt-2 cursor-pointer shadow-lg"
          >
            LOGIN
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-400 hover:text-blue-500 transition-all ease-in-out duration-200 cursor-pointer underline"
          >
            Sign up
          </span>
        </div>

        <div className="text-center my-4 text-gray-500 text-sm">OR</div>

        <div className="space-y-4">
          <button className="w-full py-3 rounded-lg bg-[#2D2D2D] hover:bg-[#252525] transition-all ease-in-out duration-200 border-[#2C2C2C] border-2 text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login with Google
          </button>
          <button className="w-full py-3 rounded-lg bg-[#2D2D2D] hover:bg-[#252525] transition-all ease-in-out duration-200 border-[#2C2C2C] border-2 text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg">
            <img
              src="https://www.svgrepo.com/show/353655/discord-icon.svg"
              alt="Discord"
              className="w-5 h-5"
            />
            Login with Discord
          </button>
        </div>
      </div>
    </div>
  );
}
