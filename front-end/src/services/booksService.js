import { useEffect, useState } from "react";

const PORT = 5167;
export const API_BASE = `http://localhost:${PORT}/api`;

const fetchBooks = async () => {
  const res = await fetch(`${API_BASE}/books`);
  if (!res.ok) {
    throw new Error("Failed to fetch books.");
  }
  return await res.json();
};

export const useBooks = (startIndex = 0, endIndex = 67) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const books = await fetchBooks();
        setBooks(books.slice(startIndex, endIndex));
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, [startIndex, endIndex]);

  return { books, loading, err };
};
