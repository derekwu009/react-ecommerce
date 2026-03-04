import express from "express";
import pool from "../db.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(authenticateToken);

router.get("/", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT user_id, user_name, user_email FROM users",
    );

    const users = rows.map((user) => ({
      id: user.user_id,
      email: user.user_email,
      username: user.user_name,
    }));

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});

export default router;
