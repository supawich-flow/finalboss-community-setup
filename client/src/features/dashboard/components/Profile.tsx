import unknownUserProfile from "../../../assets/Unknown_User.jpg"
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
const navigate = useNavigate()
const { currentUser } = useAuth()

  return (
    <div className="space-y-3 w-full py-5 px-8 h-60 bg-[#2D2D2D] rounded-3xl shadow-lg">
      <div className="flex item-center gap-3">
        <img
          className="w-22 h-22 rounded-full object-cover shadow-md"
          src={currentUser?.avatarUrl || unknownUserProfile}
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-white font-bold text-xl">{currentUser?.displayName || "Guest1234_finalboss"}</p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <p className="text-white font-light text-base">Active</p>
          </div>
        </div>
      </div>
      <div>
        <span className="text-lg font-light text-white">
          <strong>Title: </strong> {currentUser?.title || "Untitled"}
        </span>{" "}
        <br />
        <span className="text-lg font-light text-white">
          <strong>Nickname: </strong> {currentUser?.nickname || "No nickname"}
        </span>
      </div>
      <button 
      onClick={() => navigate('/editprofile')}
      className="text-white font-medium bg-[#E03E3E] hover:bg-[#A83232] transition-all duration-300 ease-in-out py-1 px-3 rounded-lg cursor-pointer">
        Edit Profile
      </button>
    </div>
  );
}


