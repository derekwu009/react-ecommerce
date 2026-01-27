import "./EditorsChoice.css";
import { BreadCrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import {
  BookAuthor,
  BookCover,
  BookDesc,
  BookPrice,
  BookTitle,
} from "../../components/bookcard/BookCard";
import { useBooks } from "../../services/booksService";

export const EditorsChoice = () => {
  const { books, loading, err } = useBooks();
  if (loading) return <p>Loading books...</p>;
  if (err) return <p>{err}</p>;

  const randomIdx = Math.floor(Math.random() * 67);
  const book = books[randomIdx];

  return (
    <>
      <section className="editors-choice">
        <div className="site-content">
          <div className="editors-choice-container">
            <div className="head-wrapper">
              <BreadCrumbs page="Editor's Choice" />
            </div>
            <div className="choice-contents">
              <BookCover book={book} />
              <div className="choice-info">
                <BookTitle heading="h1" title={book.title} />
                <BookAuthor author={`By ${book.author}`} />
                <BookPrice price={`Price: ${book.price}`} />
                <BookDesc desc={book.desc} />
                <div className="cart-buttons">
                  <input type="number" defaultValue={1} min="1" max="99" />
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
