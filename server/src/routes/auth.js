const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user_DB = require("../models/User.js");

router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  console.log("Request Body:", req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user_DB({ username, password: hashedPassword, email });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log("Register Error:", err);
    res.status(500).json({ error: err });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log('Request Body;', req.body)

  try {
    const user = await user_DB.findOne({ username });
    if (!user) {
        return res.status(401).json({ error: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ error: "รหัสผ่านไม่ถูกต้อง" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        roles: user.roles,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({
      token: token,
      userData: {
        userId: user._id,
        username: user.username,
        displayName: user.displayName,
        title: user.title,
        nickname: user.nickname,
        roles: user.roles,
        email: user.email,
        avatarUrl: user.avatarUrl,
        isActive: user.isActive,
      }
    });
  } catch (err) {
    console.log("Login Error:", err);
  }
});

module.exports = router;
