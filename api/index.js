import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
<<<<<<< HEAD
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url'; // إضافة هذا الاستيراد
=======
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63

const app = express();
dotenv.config();

<<<<<<< HEAD
mongoose.set('strictQuery', false);
=======
mongoose.set('strictQuery', false); 
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
<<<<<<< HEAD
    console.log("Connected to MongoDB.");
=======
    console.log("Connected to mongoDB.");
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
<<<<<<< HEAD
  console.log("MongoDB disconnected!");
});

// تكوين تخزين الملفات
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // مجلد تخزين الملفات
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// الوسائط الوسيطة
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/uploads", express.static(path.join(__dirname, "/uploads"))); // تحديث المسار الثابت
=======
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

<<<<<<< HEAD
// مسار رفع الملفات
app.post("/upload", upload.array("files"), (req, res) => {
  try {
    const filePaths = req.files.map(file => file.path);
    res.status(200).json({ filePaths });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// معالجة الأخطاء
=======
// Error handling middleware
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
<<<<<<< HEAD
});
=======
})
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
