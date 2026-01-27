import "./AllBooks.css";
import { BookGrid } from "../../components/bookcard/BookCard";
import { BreadCrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { useBooks } from "../../services/booksService";

export const AllBooks = () => {
  const { books, loading, err } = useBooks();
  if (loading) return <p>Loading books...</p>;
  if (err) return <p>{err}</p>;

  return (
    <>
      <section className="all-books">
        <div className="site-content">
          <div className="all-books-container">
            <BreadCrumbs page="All Books" />
            <div className="books-grid">
              <BookGrid books={books} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
