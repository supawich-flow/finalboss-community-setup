//import
require("dotenv").config({ path: "./src/config/.env" });
const app = require("./src/app.js");
const mongoose = require("mongoose");
console.log("Mongo URI:", process.env.MONGO_URI);
//PORT
const PORT = process.env.PORT || 5000;

//connecting mongoDB
mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
