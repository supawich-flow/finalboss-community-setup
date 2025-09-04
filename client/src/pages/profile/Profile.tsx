import unknownProfile from "../../assets/Unknown_User.jpg";
import { useParams } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { IoMdListBox } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { useFetchUserProfileById } from "../../hooks/fetchUserProfileById";
import { useEffect, useState } from "react";

export default function Profile() {
  const { id } = useParams();
  const { userProfile, loading } = useFetchUserProfileById(id && id !== "undefined" ? id : undefined);
  const [activeTab, setActiveTab] = useState<"posts" | "friends">("posts");

  useEffect(() => {
    console.log("userProfile:", userProfile);
  }, [userProfile]);

  return (
    <main className="min-h-screen flex justify-center items-center bg-[#121212]">
      <section className="max-w-4xl mx-auto w-full min-h-screen py-12">
        <div className="flex justify-between w-full mb-5">
          <div className="flex gap-10">
            <div className="relative group w-24 h-24 cursor-pointer">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={userProfile?.avatarUrl || unknownProfile}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">Edit</span>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-1">
              <p className="text-white font-bold text-2xl">
                {userProfile?.displayName || "UsernameEIEI"}
              </p>
              <p className="text-[#AAAAAA] font-regular text-sm">
                {userProfile?.title || "Untitled"}
              </p>
              <div className="flex gap-7">
                <p className="text-white font-regular text-base">
                  0 <span className="text-[#AAAAAA]">posts</span>
                </p>
                <p className="text-white font-regular text-base">
                  0 <span className="text-[#AAAAAA]">like</span>
                </p>
                <p className="text-white font-regular text-base">
                  0 <span className="text-[#AAAAAA]">friends</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="space-x-5">
              <button
                type="button"
                className="px-4 py-1 bg-[#E03E3E] hover:bg-[#A83232] text-white transition-all duration-300 ease-in-out text-lg rounded-4xl font-semibold cursor-pointer shadow-lg"
              >
                + Add Friend
              </button>
              <button
                type="button"
                className="px-4 py-1 bg-[#E03E3E] hover:bg-[#A83232] text-white transition-all duration-300 ease-in-out text-lg rounded-4xl font-semibold cursor-pointer shadow-lg"
              >
                Block
              </button>
            </div>
            <div>
              <IoIosSettings className="cursor-pointer text-3xl text-white" />
            </div>
          </div>
        </div>

        <div className="px-10">
          <label className="block text-base font-medium text-white mb-2">
            About me
          </label>
          <div className="w-full h-44 px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 text-[#AAAAAA] border-[#313131] text-base font-light shadow-lg">
            <p>{userProfile?.bio || ""}</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex items-center py-3 gap-2 text-sm font-regular text-white">
              <button
                onClick={() => setActiveTab("posts")}
                className={`flex cursor-pointer items-center gap-2 text-sm font-regular transition-colors ${
                  activeTab === "posts" ? "text-white" : "text-[#AAAAAA]"
                }`}
              >
                <IoMdListBox className="text-sm" />
                <span>All posts</span>
              </button>

              <span className="text-[#AAAAAA]">|</span>

              <button
                onClick={() => setActiveTab("friends")}
                className={`flex cursor-pointer items-center gap-2 text-sm font-regular transition-colors ${
                  activeTab === "friends" ? "text-white" : "text-[#AAAAAA]"
                }`}
              >
                <FaUsers className="text-sm" />
                <span>All friends</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full min-h-120 h-auto p-3 rounded-xl bg-[#2c2c2c] border-2 text-[#AAAAAA] border-[#313131] text-base font-light shadow-lg"></div>
      </section>
    </main>
  );
}
