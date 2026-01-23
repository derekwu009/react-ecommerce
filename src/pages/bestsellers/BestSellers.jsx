import "./BestSellers.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BreadCrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { BookGrid } from "../../components/bookcard/BookCard";
import { books } from "../../data/BookData";

export const BestSellers = () => {
  return (
    <>
      <section className="best-sellers">
        <div className="site-content">
          <div className="best-sellers-container">
            <BreadCrumbs page="Best Sellers" />
            <div className="best-selling-books">
              <BookGrid key={books.id} books={books.slice(46, 67)} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
