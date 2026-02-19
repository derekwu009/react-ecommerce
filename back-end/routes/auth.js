const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM users");

    const users = rows.map((user) => ({
      id: user.id,
      email: user.user_email,
      username: user.user_name,
      password: user.user_password,
    }));

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;
