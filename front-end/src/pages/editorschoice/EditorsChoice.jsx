import "./EditorsChoice.css";
import { useState } from "react";
import { useBook } from "../../services/booksService";
import { BookInfo } from "../../components/bookinfo/BookInfo";

export const EditorsChoice = () => {
  const [randomIdx] = useState(() => Math.floor(Math.random() * 67));
  const { book, loading, err } = useBook(randomIdx);

  if (loading) return <p>Loading books...</p>;
  if (err) return <p>{err}</p>;

  return (
    <>
      <section className="editors-choice">
        <BookInfo book={book} clickable={false} />
      </section>
    </>
  );
};
