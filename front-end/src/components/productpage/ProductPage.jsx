import "./ProductPage.css";
import { useBook } from "../../services/booksService";
import { useParams } from "react-router-dom";
import { BookInfo } from "../bookinfo/BookInfo";

export const ProductPage = () => {
  const { id } = useParams();
  const { book, loading, err } = useBook(Number(id));

  if (loading) return <p>Loading books...</p>;
  if (err) return <p>{err}</p>;

  return (
    <>
      <section className="product-page">
        <BookInfo book={book} clickable={false} />
      </section>
    </>
  );
};
