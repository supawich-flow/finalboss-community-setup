import { useAuth } from "../../context/AuthContext";

//icons
import { FaHome, FaUser } from "react-icons/fa";
import { BiStats } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { PiRankingBold } from "react-icons/pi";
import { MdAdminPanelSettings, MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

//dependencies function
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { logout, currentUser} = useAuth();

  const MENUlinks = [
  { to: "/", label: "Home", icon: <FaHome /> },
  { to: "/tierlist", label: "Tier List", icon: <PiRankingBold /> },
  { to: currentUser ? `/profile/${currentUser.userId}` : "#", label: "My Profile", icon: <FaUser /> },
  { to: "/valstats", label: "Valorant Stats", icon: <BiStats /> },
  { to: "/feed", label: "Community Feed", icon: <TbWorld /> },
];

const ADMINlinks = [
  { to: "/admin", label: "Admin", icon: <MdAdminPanelSettings /> },
];

const SETTINGlinks = [
  { to: "/editprofile", label: "Settings", icon: <IoMdSettings /> },
  { to: "/dashboard", label: "Logout", icon: <MdLogout /> },
];

  return (
    <div className="w-full h-full bg-[#1E1E1E] flex-col py-10 px-10">
      <div className="flex justify-center items-center mb-15">
        <img src="../../../public/Finallboss logo_formatted.png"></img>
      </div>

      <div className="flex-col">
        <p className="font-bold text-[#AAAAAA] text-xs mb-5">MENU</p>
        <div className="space-y-4">
          {MENUlinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({
                isActive,
              }) => `flex items-center gap-3 px-4 py-3 rounded-lg font-regular text-[#AAAAAA] text-base
            ${isActive ? "bg-[#A83232] cursor-default font-bold text-white" : "hover:bg-[#2c2c2c]"}`}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
          {currentUser?.roles.includes("admin") &&
            ADMINlinks.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({
                  isActive,
                }) => `flex items-center gap-3 px-4 py-3 rounded-lg font-regular text-[#AAAAAA] text-base
            ${isActive ? "bg-[#A83232] cursor-default font-bold text-white" : "hover:bg-[#2c2c2c]"}`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </NavLink>
            ))}
        </div>

        <footer className="fixed bottom-0 mb-5">
          <div className="space-y-2">
            <p className="font-bold text-[#AAAAAA] text-xs mb-5">SETTING</p>
            {SETTINGlinks.map(({ to, label, icon }) =>
              label !== "Logout" ? (
                <NavLink
                  key={to}
                  to={to}
                  onClick={label === "Logout" ? logout : undefined}
                  className={({
                    isActive,
                  }) => `flex items-center gap-3 px-4 py-3 rounded-lg font-regular w-full
                ${label === "Logout" ? "text-[#E03E3E] font-bold" : "text-[#AAAAAA]"} text-base
                ${isActive ? "bg-[#A83232] cursor-default font-bold text-white" : "hover:bg-[#2c2c2c]"}
                `}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </NavLink>
              ) : (
                <button
                  key={to}
                  onClick={label === "Logout" ? logout : undefined}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-regular w-full hover:bg-[#2c2c2c]
                ${label === "Logout" ? "text-[#E03E3E] font-bold cursor-pointer" : "text-[#AAAAAA]"} text-base`}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </button>
              )
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}


