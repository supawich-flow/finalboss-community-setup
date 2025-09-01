import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface UploadPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageFile: File | null;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
  imagePreview: string | null;
  setImagePreview: (url: string | null) => void;
  setProfileForm: React.Dispatch<React.SetStateAction<any | null>>;
  proFileForm: {
    displayName: string;
    nickname: string;
    title: string;
    rank: string;
    bio: string;
    avatarUrl: string;
  };
}

export default function UploadPhotoModal({
  isOpen,
  onClose,
  imageFile,
  setImageFile,
  imagePreview,
  setImagePreview,
  setProfileForm,
}: UploadPhotoModalProps) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setImageFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!imageFile) return;

    const toastId = toast.loading("กำลังอัพโหลดรูปภาพ...");
    try {
      const formData = new FormData();
      formData.append("avatar", imageFile);


      const token = localStorage.getItem("token"); // ถ้ามีระบบ auth
      const res = await axios.post(
        "http://localhost:5000/api/users/me/editprofile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newAvatarUrl = res.data.avatarUrl;
      setProfileForm((prev: any) => ({
        ...prev,
        avatarUrl: newAvatarUrl
      }));
      toast.success("อัพโหลดรูปภาพสำเร็จ! กด Save Changes เพื่อบันทึก", { id: toastId });
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("อัพโหลดรูปภาพล้มเหลว!", { id: toastId });
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-[#2c2c2c] rounded-2xl shadow-lg max-w-sm w-full p-6 relative flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#AAAAAA] hover:text-gray-700 text-2xl font-bold cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-6 text-white">Upload Photo</h2>
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-32 h-32 rounded-full object-cover shadow-lg mb-6"
          />
        ) : (
          <div className="w-32 h-32 rounded-full border-4 border-dashed border-gray-300 dark:border-gray-600 mb-6 flex items-center justify-center">
            <p className="text-gray-400 text-center">No photo selected</p>
          </div>
        )}
        <label
          htmlFor="file-upload"
          className="w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#A83232] transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-10 w-10 text-[#E03E3E] mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <p className="text-white dark:text-gray-400">Click to browse</p>
          <input
            id="file-upload"
            type="file"
            onChange={handleChange}
            accept="image/*"
            className="hidden"
          />
        </label>
        <button
          onClick={handleUpload}
          className="cursor-pointer mt-6 w-full bg-[#E03E3E] hover:bg-[#A83232] text-white rounded-2xl py-2 text-sm font-medium transition-colors duration-150"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
