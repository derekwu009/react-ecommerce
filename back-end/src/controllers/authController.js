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
      (err, rows) => {
        if (err) throw err;
        console.log(rows);
      },
    );
    if (existingEmail.length > 0) {
      conn.release();
      return res.status(400).json({ message: "Email already exists." });
    }

    const existingUsername = await conn.query(
      "SELECT user_id FROM users WHERE user_name = ?",
      [username],
      (err, rows) => {
        if (err) throw err;
        console.log(rows);
      },
    );
    if (existingUsername.length > 0) {
      conn.release();
      return res.status(400).json({ message: "Username already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await conn.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES (?, ?, ?)",
      [username, email, password],
      (err, rows) => {
        if (err) throw err;
        console.log(rows);
      },
    );

    conn.release();
    res.status(201).json({ message: "User successfully created" });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

export const login = async (req, res) => {
  const { identifier, password } = req.body;
  if (!identifier || !password) {
    res.status(400).json({ message: "Missing fields." });
  }
  try {
    const conn = pool.getConnection();

    const existingUser = await conn.query(
      "SELECT user_id FROM users WHERE user_name = ? OR user_email = ?",
      [identifier, identifier],
      (err, rows) => {
        if (err) throw err;
        console.log(rows);
      },
    );

    conn.release();

    if (existingUser.length < 1) {
      return res.status(400).json({ message: "User not found." });
    }

    const user = existingUser[0];
    const password = await bcrypt.compare(password, user.user_password);

    if (!password) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const newAccessToken = jwt.sign(
      { userId: user.user_id, userName: user.user_name },
      JWT_SECRET,
      { expiresIn: "15m" },
    );
    res.json({ accessToken: newAccessToken });

    return res.status(400).json({ message: "Successfully logged in." });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};
