const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  oauthProvider: {
    type: String,
    enum: ['google', 'discord', null],
    default:null,
  },
  oauthId: {
    type: String,
    default: null,
  },
  displayName: {
    type:String,
    default:null
  },
  title: {
    type:String,
    default:null
  },
  bio: {
    type:String,
    default:null
  },
  nickname: {
    type:String,
    default:null
  },
  avatarUrl: {
    type: String,
    default: null,
  },
  roles: {
    type: [String],
    enum: ['admin', 'member',],
    default: ['member'],
  },
  favoriteAgent: {
    type: String,    // เช่น 'Jett', 'Sova' — อ้างอิงจาก Valorant API
    default: null,
  },
  rank: {
    type: String,   // เช่น 'Gold 3', 'Platinum 1'
    default: null,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

userSchema.pre('save', function(next) {
    this.updatedAt = Date.now()
    next()
})

module.exports = mongoose.model('User', userSchema);