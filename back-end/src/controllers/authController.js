import bcrypt from "bcryptjs";
import pool from "../../db.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

export const signup = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: "Missing fields." });
  }

  let conn;
  try {
    conn = await pool.getConnection();

    const existingEmail = await conn.query(
      "SELECT user_id FROM users WHERE user_email = ?",
      [email],
    );
    if (existingEmail.length > 0) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const existingUsername = await conn.query(
      "SELECT user_id FROM users WHERE user_name = ?",
      [username],
    );
    if (existingUsername.length > 0) {
      return res.status(400).json({ message: "Username already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await conn.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
    );

    res.status(201).json({ message: "User successfully created" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error." });
  } finally {
    if (conn) conn.release();
  }
};

export const login = async (req, res) => {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.status(400).json({ message: "Missing fields." });
  }

  let conn;
  try {
    conn = await pool.getConnection();

    const existingUser = await conn.query(
      "SELECT user_id, user_name, user_password FROM users WHERE user_name = ? OR user_email = ?",
      [identifier, identifier],
    );

    if (existingUser.length < 1) {
      return res.status(400).json({ message: "User not found." });
    }

    const user = existingUser[0];
    const isMatch = await bcrypt.compare(password, user.user_password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const newAccessToken = jwt.sign(
      { userId: Number(user.user_id), userName: user.user_name },
      JWT_SECRET,
      { expiresIn: "15m" },
    );

    const refreshToken = jwt.sign(
      { userId: Number(user.user_id), userName: user.user_name },
      JWT_REFRESH_SECRET,
      { expiresIn: "7d" },
    );

    await conn.query(
      "INSERT INTO refresh_tokens (user_id, token) VALUES (?, ?)",
      [Number(user.user_id), refreshToken],
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
      user: {
        id: Number(user.user_id),
        user_name: user.user_name,
      },
      message: "Successfully logged in.",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error." });
  } finally {
    if (conn) conn.release();
  }
};

export const refresh = async (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({ message: "Refresh token not found." });
  }

  let conn;
  try {
    conn = await pool.getConnection();

    const storedToken = await conn.query(
      "SELECT * FROM refresh_tokens WHERE token = ?",
      [token],
    );

    if (storedToken.length < 1) {
      return res.status(401).json({ message: "No tokens found." });
    }

    const decoded = jwt.verify(token, JWT_REFRESH_SECRET);

    const accessToken = jwt.sign(
      {
        userId: decoded.userId,
        userName: decoded.userName,
      },
      JWT_SECRET,
      { expiresIn: "15m" },
    );

    return res.status(200).json({ accessToken });
  } catch {
    console.error(err);
    return res
      .status(403)
      .json({ message: "Invalid or expired refresh token." });
  } finally {
    if (conn) conn.release();
  }
};

export const logout = async (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(204).send();
  }

  let conn;
  try {
    conn = await pool.getConnection();

    await conn.query("DELETE FROM refresh_tokens WHERE token = ?", [token]);
    res.clearCookie("refreshToken");
    return res.status(200).json({ message: "Successfully logged out." });
  } catch {
    console.error(err);
    return res.status(500).json({ message: "Server error." });
  } finally {
    if (conn) conn.release();
  }
};
