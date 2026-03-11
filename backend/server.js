require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* =========================
   CORS CONFIG
========================= */
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://127.0.0.1:5500",
      "http://localhost:5500",
      /\.netlify\.app$/,
      /\.netlify\.live$/,
      /\.vercel\.app$/, // ✅ allow all vercel deployments
    ],
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use(express.json({ limit: "5mb" }));

/* =========================
   MONGODB CONNECTION
========================= */
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("✅ MongoDB connected");

    // Start server ONLY after DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

/* =========================
   SCHEMA
========================= */
const slambookSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  MobileNo: { type: String, required: true },
  nickname: String,
  callMeAs: String,
  birthDate: String,
  favSong: String,
  favMovie: String,
  hobbies: String,
  bestFriends: String,
  ourFriendship: String,
  memory: String,
  describeme: String,
  thoughts: String,
  loveDefn: String,
  advice: String,
  sweetMessage: String,
  signature: String,
  submittedAt: { type: Date, default: Date.now },
});

const Slambook = mongoose.model("Slambook", slambookSchema);

/* =========================
   ROUTES
========================= */

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Sweet Memories API is running 💕" });
});

// Submit entry
app.post("/api/submit", async (req, res) => {
  try {
    const entry = new Slambook(req.body);
    await entry.save();

    res.status(201).json({
      success: true,
      message: "Entry saved! 💕",
      id: entry._id,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

// Get all entries
app.get("/api/entries", async (req, res) => {
  try {
    const entries = await Slambook.find().sort({ submittedAt: -1 });

    res.json({
      success: true,
      entries,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Delete entry
app.delete("/api/entries/:id", async (req, res) => {
  try {
    await Slambook.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Entry deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});
