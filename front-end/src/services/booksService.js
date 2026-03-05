import { useEffect, useState } from "react";

export const API_BASE = import.meta.env.VITE_API_URL;

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

export const useBook = (id) => {
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const loadBook = async () => {
      try {
        const allBooks = await fetchBooks();
        const book = allBooks.find((book) => book.id === id);
        setBook(book);
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    };

    loadBook();
  }, []);

  return { book, loading, err };
};
