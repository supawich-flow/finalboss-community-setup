import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import unknownProfile from "../../assets/Unknown_User.jpg";
import UploadPhotoModal from "../../features/user/components/UploadPhotoModal";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils copy/time";
import { useAuth } from "../../context/AuthContext";

type ProfileType = {
  displayName: string;
  nickname: string;
  title: string;
  rank: string;
  bio: string;
  createdAt: string;
  avatarUrl: string;
  roles: string[]
};

type ProfileFormType = {
  displayName: string;
  nickname: string;
  title: string;
  rank: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile() {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>('')
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const { refreshUser } = useAuth()
  const [profile, setProfile] = useState<ProfileType>({
    displayName: "",
    nickname: "",
    title: "",
    rank: "",
    bio: "",
    createdAt: "",
    avatarUrl: "",
    roles: [],
  });
  const [profileForm, setProfileForm] = useState<ProfileFormType>({
    displayName: "",
    nickname: "",
    title: "",
    rank: "",
    bio: "",
    avatarUrl: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get(
          "http://localhost:5000/api/users/me/editprofile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = res.data;
        setProfile({
          displayName: data.displayName || "",
          nickname: data.nickname || "",
          title: data.title || "",
          rank: data.rank || "",
          bio: data.bio || "",
          createdAt: data.createdAt || "",
          avatarUrl: data.avatarUrl || "",
          roles: data.roles || [],
        });
      } catch (err) {
        console.log("Error fetching profile:", err);
        toast.error("โหลดข้อมูลโปรไฟล์ล้มเหลว");
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  useEffect(() => {
    if (profile.displayName) {
      setProfileForm({
        displayName: profile.displayName,
        nickname: profile.nickname,
        title: profile.title,
        rank: profile.rank,
        bio: profile.bio,
        avatarUrl: profile.avatarUrl
      });
    }

  }, [profile]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfileForm({
      ...profileForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("กำลังอัพเดทโปรไฟล์...");

    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        "http://localhost:5000/api/users/me/editprofile",
        profileForm,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("อัพเดทโปรไฟล์สำเร็จ!", { id: toastId });
      await refreshUser()
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("อัพเดทโปรไฟล์ล้มเหลว", { id: toastId });
    }
  };

  return (
    <main className="min-h-screen flex bg-[#121212]">
      {isPhotoModalOpen && (
        <UploadPhotoModal
          isOpen={isPhotoModalOpen}
          onClose={() => setIsPhotoModalOpen(false)}
          imageFile={imageFile}
          setImageFile={setImageFile}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          setProfileForm={setProfileForm}
          proFileForm={profileForm}
        />
      )}
      <section className="max-w-5xl mx-auto w-full min-h-screen py-12 space-y-10">
        <h1 className="text-white font-bold text-lg">Edit Profile</h1>
        <div className="">
          <div className="flex item-center gap-7">
            <div
              onClick={() => setIsPhotoModalOpen(!isPhotoModalOpen)}
              className="relative group w-24 h-24 cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={profile.avatarUrl || unknownProfile}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">Edit</span>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <p className="text-white font-bold text-2xl">
                {profile.displayName || "Guest1234"}
              </p>
              <p className="text-white font-regular text-base">
                {profile.title || "No title"}
              </p>
              <p className="text-[#AAAAAA] font-regular text-base">
                Joined at {formatDate(profile.createdAt) || "-"}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6 text-white">
          <h1 className="font-bold text-lg">General Information</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Display Name</label>
                  <input
                    type="text"
                    placeholder="ใส่ชื่อที่ใช้แสดงผลของคุณเช่น finalboss"
                    name="displayName"
                    onChange={handleChange}
                    value={profileForm?.displayName || ""}
                    className="w-lg px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 border-[#313131] text-sm shadow-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Nickname</label>
                  <input
                    type="text"
                    placeholder="ใส่ชื่อเล่นของคุณ เช่น บอม"
                    name="nickname"
                    onChange={handleChange}
                    value={profileForm?.nickname || ""}
                    className="w-lg px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 border-[#313131] text-sm shadow-lg"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="ใส่ฉายาของคุณ เช่น Eco Abuser Finalboss"
                    name="title"
                    onChange={handleChange}
                    value={profileForm?.title || ""}
                    className="w-md px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 border-[#313131] text-sm shadow-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Valorant Rank</label>
                  <input
                    type="text"
                    placeholder="ใส่แรงค์ของคุณ เช่น Radiant"
                    name="rank"
                    onChange={handleChange}
                    value={profileForm?.rank || ""}
                    className="w-md px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 border-[#313131] text-sm shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">About me</label>
                <textarea
                  name="bio"
                  placeholder="ใส่ข้อความเกี่ยวกับฉัน..."
                  rows={4}
                  onChange={handleChange}
                  value={profileForm?.bio || ""}
                  className="w-full h-50 px-3 py-2 rounded-xl bg-[#2c2c2c] border-2 border-[#313131] text-sm shadow-lg"
                />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-8 py-3 bg-[#E03E3E] hover:bg-[#A83232] transition-all duration-300 ease-in-out text-xl rounded-4xl font-semibold mt-2 cursor-pointer shadow-lg"
              >
                BACK
              </button>
              <button
                type="submit"
                className="px-12 py-3 bg-[#E03E3E] hover:bg-[#A83232] transition-all duration-300 ease-in-out text-xl rounded-4xl font-semibold mt-2 cursor-pointer shadow-lg"
              >
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
