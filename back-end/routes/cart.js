import { authenticateToken } from "../middleware/authMiddleware.js";

import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", authenticateToken, async (req, res) => {
  let conn;
  try {
    const userId = req.user.userId;

    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT user_id, book_id, quantity FROM cart WHERE user_id = ?",
      [userId],
    );

    const cartItems = rows.map((cartItem) => ({
      user_id: Number(cartItem.user_id),
      book_id: Number(cartItem.book_id),
      quantity: Number(cartItem.quantity),
    }));

    res.json(cartItems);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});

export default router;
