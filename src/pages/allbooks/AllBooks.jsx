import "./AllBooks.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BookGrid } from "../../components/bookcard/BookCard";
import { BreadCrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { books } from "../../data/BookData";

export const AllBooks = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};
