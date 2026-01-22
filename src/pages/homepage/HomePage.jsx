import "./HomePage.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BookImageGrid, BookGrid } from "../../components/bookcard/BookCard";
import { FiSend } from "react-icons/fi";
import { books } from "../../data/BookData";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

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
              <button
                className="discover-now-btn"
                onClick={() => handleNavigate("/best-sellers")}
              >
                Discover Now
              </button>
            </div>
            <div className="latest-books">
              <BookImageGrid books={books.slice(0, 10)} />
            </div>
          </div>
        </section>

        <section className="discovery">
          <div className="discovery-container">
            <div className="discovery-heading">
              <h1 className="discovery-title">Discover New Books!</h1>
              <div className="discovery-description">
                Want something new to read? Give these a try!
              </div>
            </div>

            <div className="discovery-books">
              <BookGrid books={books.slice(10, 10 + 8)} />
            </div>
            <button
              className="discover-more-btn"
              onClick={() => handleNavigate("/all-books")}
            >
              Discover More Books
            </button>
          </div>
        </section>

        <section className="newsletter">
          <div className="newsletter-container">
            <div className="newsletter-heading">
              <h1>Subscribe To Our Newsletter</h1>
            </div>

            <div className="newsletter-content">
              <p>{faker.lorem.sentences(3)}</p>

              <form id="email-form">
                <div className="email-container">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    placeholder="Enter your email address here"
                  />
                  <button type="submit">
                    Send <FiSend className="send-btn" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};
