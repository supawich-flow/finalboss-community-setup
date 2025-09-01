import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type UserProfile = {
  userId: string;
  username: string;
  displayName: string;
  roles: string[];
  email: string;
  avatarUrl: string;
  bio: string;
  title: string;
};

export const useFetchUserProfileById = (userId: string | undefined) => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("token หมดอายุ, โปรดเข้าสู่ระบบใหม่อีกครั้ง!");
          navigate("/login");
          return;
        }

        const res = await axios.get(
          `http://localhost:5000/api/users/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const fetchedUser = res.data;
        setUserProfile(fetchedUser);
      } catch (err) {
        console.error("Error fetching user profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  return { userProfile, loading };
};
