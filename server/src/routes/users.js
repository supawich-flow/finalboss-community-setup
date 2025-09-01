const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../utils/cloudinary.js");
const User = require("../models/User.js");
const streamifier = require("streamifier");

//import middlewares
const { verifyToken } = require("../middlewares/auth.js");

router.get('/profile/:id',verifyToken, async(req,res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id).select(
            "displayName nickname title rank bio createdAt avatarUrl roles email"
        )
        if (!user) return res.status(404).json({ message:"User not found" })

        res.status(200).json(user)
    } catch (err) {
        console.log("Fetch profile error:", err)
        res.status(500).json({ message:"Sever Error" })
    }
})

module.exports = router;
