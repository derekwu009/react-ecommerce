import "./BestSellers.css";
import { BreadCrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { BookGrid } from "../../components/bookcard/BookCard";
import { books } from "../../data/BookData";
import { useBooks } from "../../services/booksService";

export const BestSellers = () => {
  const { books, loading, err } = useBooks(67 - 4, 67);
  if (loading) return <p>Loading books...</p>;
  if (err) return <p>{err}</p>;

  return (
    <>
      <section className="best-sellers">
        <div className="site-content">
          <div className="best-sellers-container">
            <BreadCrumbs page="Best Sellers" />
            <div className="best-selling-books">
              <BookGrid key={books.id} books={books} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
