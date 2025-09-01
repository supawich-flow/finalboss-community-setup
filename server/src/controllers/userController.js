const User = require("../models/User.js");

const updateProfile = async (req, res) => {
  const userId = req.user.userId;
  const updates = {};
  
  console.log("Request body:", req.body);
  console.log("Request headers:", req.headers);
  console.log("Content-Type:", req.headers['content-type']);

  ["displayName", "nickname", "title", "rank", "bio", "avatarUrl"].forEach(
    (field) => {
      const value = req.body[field];
      // สำหรับ avatarUrl ให้รับค่าได้แม้จะเป็น string ว่าง
      if (field === "avatarUrl") {
        if (value !== undefined) {
          updates[field] = value;
        }
      } else {
        // สำหรับ field อื่นๆ ต้องไม่เป็น string ว่าง
        if (typeof value === "string" && value.trim() !== "") {
          updates[field] = value;
        }
      }
    }
  );

  console.log("Updates object:", updates);

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.log("updateProfile error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { updateProfile };
