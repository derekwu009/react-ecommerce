const express = require("express");
const router = express.Router();
const pool = require("../db");
const { faker } = require("@faker-js/faker");

router.get("/", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM books ORDER BY id ASC");

    const books = rows.map((row) => ({
      id: row.id,
      title: row.title,
      author: row.author,
      rating: row.rating,
      price: faker.commerce.price({ min: 15, max: 30, symbol: "$" }),
      desc: faker.lorem.sentences(10),
      cover: row.isbn
        ? `https://covers.openlibrary.org/b/isbn/${row.isbn}-L.jpg`
        : "https://placehold.co/285x430?text=No+Cover",
    }));

    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;
