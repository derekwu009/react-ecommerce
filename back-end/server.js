require("dotenv").config();

import { signup, login } from "./src/controllers/authController";

const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/books");
const authRouter = require("./routes/auth");
// const authRefreshRouter = require("./routes/authRefresh");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", booksRouter);
app.use("/api/auth", authRouter);
app.use("/api/auth/refresh", authRefreshRouter);

app.post("/signup", signup);
app.post("/login", login);

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  try {
    res.json("Connected.");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log("Server running on port"));
