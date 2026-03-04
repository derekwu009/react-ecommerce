import express from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import booksRouter from "./routes/books.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/books", booksRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5167;

app.get("/", async (req, res) => {
  try {
    res.json("Connected.");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
