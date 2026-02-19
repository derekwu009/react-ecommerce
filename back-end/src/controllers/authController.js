import bcrypt from "bcryptjs";
const pool = require("../../db");
var jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

export const signup = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: "Missing fields." });
  }

  try {
    const conn = await pool.getConnection();

    const existingEmail = await conn.query(
      "SELECT user_id FROM users WHERE email = ?",
      [email],
    );
    if (existingEmail.length > 0) {
      conn.release();
      return res.status(400).json({ message: "Email already exists." });
    }

    const existingUsername = await conn.query(
      "SELECT user_id FROM users WHERE user_name = ?",
      [username],
    );
    if (existingUsername.length > 0) {
      conn.release();
      return res.status(400).json({ message: "Username already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await conn.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES (?, ?, ?)",
      [username, email, password],
    );

    conn.release();
    res.status(201).json({ message: "User successfully created" });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

export const login = async (req, res) => {
  const { identifier, password } = req.body;
};
