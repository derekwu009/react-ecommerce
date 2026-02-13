require("dotenv").config();

const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/books");
const authRouter = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  try {
    res.json("Connected.");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use("/api/books", booksRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log("Server running on port"));
