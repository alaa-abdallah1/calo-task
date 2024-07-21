import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import jobRoutes from "./routes/jobRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const server = http.createServer(app);

app.use(express.json());
app.use(cors());

app.use("/api", jobRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
