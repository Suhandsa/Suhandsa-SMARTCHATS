import express from "express";
import bodyParser from "body-parser";
import cookieParse from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import { connectdb } from "./lib/db.js";

const app = express(); 
const PORT = process.env.PORT || 5001;

const __dirname = path.resolve();

app.use(cors({
  origin: "http://localhost:5173", // allow frontend
  credentials: true                // if using cookies or auth headers
}));

app.use(express.json());
app.use(cookieParse());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectdb();
});
