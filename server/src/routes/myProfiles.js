const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../utils/cloudinary.js");
const User = require("../models/User.js");
const streamifier = require("streamifier");

//import middlewares
const { verifyToken } = require("../middlewares/auth.js");
const { updateProfile } = require("../controllers/userController.js");

//multer setup
const upload = multer({ storage: multer.memoryStorage() });

router.patch("/editprofile", verifyToken, updateProfile);

router.get("/editprofile", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).select(
      "displayName nickname title rank bio createdAt avatarUrl roles"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log("Error fetching user profile:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post(
  "/editprofile",
  verifyToken,
  upload.single("avatar"),
  async (req, res) => {
    try {
      if (!req.file)
        return res.status(400).json({ message: "No file provided" });

      const streamUpload = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: "finalboss/avatars",
              resource_type: "image",
              public_id: `user_${req.user.userId}`,
              overwrite: true,
            },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );
          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };

      const result = await streamUpload();

      res.status(200).json({
        message: "Avatar updated",
        avatarUrl: result.secure_url,
      });
    } catch (err) {
      console.error("Upload error:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

module.exports = router;
