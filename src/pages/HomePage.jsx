import { Header } from "../components/Header";
import { books } from "../data/BookData";
import { BookImageGrid, BookGrid } from "../components/BookCard";
import { faker } from "@faker-js/faker";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <Header />
      <section className="content">
        <section className="latest-releases">
          <div className="latest-books-container">
            <div className="latest-books-text-container">
              <h2 className="latest-books-title">Latest Books</h2>
              <h1 className="latest-books-heading">
                You're Only One Book Away From a Good Mood
              </h1>
              <div className="latest-books-description">
                {faker.lorem.sentences(3)}
              </div>
              <button className="discover-now-btn">Discover Now</button>
            </div>
            <div className="latest-books">
              <BookImageGrid books={books.slice(0, 10)} />
            </div>
          </div>
        </section>

        <section className="discovery">
          <div className="discovery-container">
            <div className="discovery-heading">
              <h1 className="discovery-title">Discover Your New Book</h1>
              <div className="discovery-description">
                {faker.lorem.sentences(3)}
              </div>
            </div>

            <div className="discovery-books">
              <BookGrid books={books.slice(10, 10 + 8)} />
            </div>
            <button className="discover-more-btn">Discover More Books</button>
          </div>
        </section>

        <section className="best-selling-book">
          <div className="best-selling-container">
            <div className="best-selling-heading">
              <h1>Best Selling Book</h1>
            </div>
            <div className="best-seller"></div>
          </div>
        </section>
        <section className="subscribe">
          <p>Subscribe</p>
        </section>
        {/* ADD A FOOTER HERE */}
      </section>
    </>
  );
};
